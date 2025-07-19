import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for blog posts
export interface BlogPost {
    id: string
    user_id: string
    title: string
    status: 'idea' | 'planning' | 'writing' | 'reviewing' | 'published'
    priority: 'low' | 'medium' | 'high'
    category: string
    target_date?: string
    notes?: string
    word_count?: number
    tags?: string[]
    created_at: string
    updated_at: string
}

// Database table name
export const BLOG_POSTS_TABLE = 'blog_posts' 