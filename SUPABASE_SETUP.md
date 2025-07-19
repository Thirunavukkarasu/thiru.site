# Supabase Setup for Blog Planner

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Choose your organization and project name
3. Set a database password (save this!)
4. Choose a region close to you
5. Wait for the project to be created

## 2. Get API Keys

1. Go to your project dashboard
2. Navigate to Settings → API
3. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **Anon public key** (starts with `eyJ`)

## 3. Set Environment Variables

Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## 4. Create Database Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  status TEXT CHECK (status IN ('idea', 'planning', 'writing', 'reviewing', 'published')) DEFAULT 'idea',
  priority TEXT CHECK (priority IN ('low', 'medium', 'high')) DEFAULT 'medium',
  category TEXT,
  target_date DATE,
  notes TEXT,
  word_count INTEGER DEFAULT 0,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see only their own posts
CREATE POLICY "Users can view own posts" ON blog_posts
  FOR SELECT USING (auth.uid() = user_id);

-- Create policy to allow users to insert their own posts
CREATE POLICY "Users can insert own posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to update their own posts
CREATE POLICY "Users can update own posts" ON blog_posts
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policy to allow users to delete their own posts
CREATE POLICY "Users can delete own posts" ON blog_posts
  FOR DELETE USING (auth.uid() = user_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

## 5. Configure GitHub OAuth

1. Go to Authentication → Providers in your Supabase dashboard
2. Enable GitHub provider
3. Create a GitHub OAuth app:
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Create new OAuth app
   - Set Authorization callback URL to: `https://your-project-ref.supabase.co/auth/v1/callback`
4. Copy the GitHub Client ID and Client Secret to Supabase
5. Save the configuration

## 6. Test the Integration

1. Start your development server: `pnpm dev`
2. Navigate to `/experiments/blog-planner`
3. Click "Sign in with GitHub"
4. Authorize the app
5. You should now be able to add and manage blog posts!

## Features

- ✅ GitHub authentication
- ✅ Secure data storage with Row Level Security
- ✅ Real-time data persistence
- ✅ User-specific blog post management
- ✅ Automatic timestamps and updates

## Troubleshooting

- **Authentication errors**: Check your GitHub OAuth app configuration
- **Database errors**: Ensure the SQL table was created correctly
- **Environment variables**: Make sure `.env.local` is in your project root
- **CORS issues**: Check that your Supabase URL is correct
