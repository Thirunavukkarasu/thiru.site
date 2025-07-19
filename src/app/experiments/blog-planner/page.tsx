"use client";

import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase, BlogPost, BLOG_POSTS_TABLE } from "@/lib/supabase";
import Auth from "@/components/auth";

interface LocalBlogPost {
  id: string;
  title: string;
  status: "idea" | "planning" | "writing" | "reviewing" | "published";
  priority: "low" | "medium" | "high";
  category: string;
  targetDate?: string;
  notes?: string;
  wordCount?: number;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export default function BlogPlannerPage() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<LocalBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const [newPost, setNewPost] = useState({
    title: "",
    category: "",
    priority: "medium" as const,
    targetDate: "",
    notes: "",
  });

  // Load posts from Supabase when user is authenticated
  useEffect(() => {
    if (user) {
      loadPosts();
    } else {
      setPosts([]);
      setLoading(false);
    }
  }, [user]);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from(BLOG_POSTS_TABLE)
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Convert database format to local format
      const localPosts: LocalBlogPost[] =
        data?.map((post) => ({
          id: post.id,
          title: post.title,
          status: post.status,
          priority: post.priority,
          category: post.category,
          targetDate: post.target_date,
          notes: post.notes,
          wordCount: post.word_count,
          tags: post.tags,
          createdAt: post.created_at,
          updatedAt: post.updated_at,
        })) || [];

      setPosts(localPosts);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const addNewPost = async () => {
    if (!newPost.title.trim() || !user) return;

    try {
      const { data, error } = await supabase
        .from(BLOG_POSTS_TABLE)
        .insert({
          user_id: user.id,
          title: newPost.title,
          status: "idea",
          priority: newPost.priority,
          category: newPost.category,
          target_date: newPost.targetDate || null,
          notes: newPost.notes || null,
          word_count: 0,
          tags: [],
        })
        .select()
        .single();

      if (error) throw error;

      // Add to local state
      const localPost: LocalBlogPost = {
        id: data.id,
        title: data.title,
        status: data.status,
        priority: data.priority,
        category: data.category,
        targetDate: data.target_date,
        notes: data.notes,
        wordCount: data.word_count,
        tags: data.tags,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      };

      setPosts([localPost, ...posts]);
      setNewPost({
        title: "",
        category: "",
        priority: "medium",
        targetDate: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const updatePostStatus = async (
    id: string,
    status: LocalBlogPost["status"]
  ) => {
    try {
      const { error } = await supabase
        .from(BLOG_POSTS_TABLE)
        .update({
          status,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .eq("user_id", user?.id);

      if (error) throw error;

      // Update local state
      setPosts(
        posts.map((post) =>
          post.id === id
            ? {
                ...post,
                status,
                updatedAt: new Date().toISOString().split("T")[0],
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "idea":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      case "planning":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "writing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "reviewing":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "published":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "idea":
        return "💡";
      case "planning":
        return "📋";
      case "writing":
        return "✍️";
      case "reviewing":
        return "👀";
      case "published":
        return "✅";
      default:
        return "📝";
    }
  };

  const getDaysUntilTarget = (targetDate: string) => {
    const today = new Date();
    const target = new Date(targetDate);
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getOverduePosts = () => {
    const today = new Date();
    return posts.filter(
      (post) =>
        post.targetDate &&
        new Date(post.targetDate) < today &&
        post.status !== "published"
    );
  };

  const getUpcomingPosts = () => {
    const today = new Date();
    return posts.filter(
      (post) =>
        post.targetDate &&
        new Date(post.targetDate) >= today &&
        post.status !== "published"
    );
  };

  const overduePosts = getOverduePosts();
  const upcomingPosts = getUpcomingPosts();

  // Show auth component if not authenticated
  if (!user) {
    return (
      <div className="prose max-w-none">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">📝 Blog Planner</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Plan, track, and manage your blog content
          </p>
        </div>
        <Auth onAuthChange={setUser} />
      </div>
    );
  }

  return (
    <div className="prose max-w-none">
      <Auth onAuthChange={setUser} />

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">📝 Blog Planner</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Plan, track, and manage your blog content
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {posts.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Posts
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {posts.filter((p) => p.status === "writing").length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                In Progress
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {overduePosts.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Overdue
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {posts.filter((p) => p.status === "published").length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Published
              </div>
            </div>
          </div>

          {/* Add New Post */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">➕ Add New Blog Idea</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) =>
                    setNewPost({ ...newPost, title: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                  placeholder="Enter blog post title..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={newPost.category}
                  onChange={(e) =>
                    setNewPost({ ...newPost, category: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                  placeholder="e.g., engineering-leadership"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Priority
                </label>
                <select
                  value={newPost.priority}
                  onChange={(e) =>
                    setNewPost({ ...newPost, priority: e.target.value as any })
                  }
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Target Date
                </label>
                <input
                  type="date"
                  value={newPost.targetDate}
                  onChange={(e) =>
                    setNewPost({ ...newPost, targetDate: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Notes</label>
              <textarea
                value={newPost.notes}
                onChange={(e) =>
                  setNewPost({ ...newPost, notes: e.target.value })
                }
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                rows={3}
                placeholder="Add notes, ideas, or outline..."
              />
            </div>
            <button
              onClick={addNewPost}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Add Post
            </button>
          </div>

          {/* Overdue Posts */}
          {overduePosts.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">
                ⚠️ Overdue Posts ({overduePosts.length})
              </h2>
              <div className="space-y-4">
                {overduePosts.map((post) => (
                  <div
                    key={post.id}
                    className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-900/20"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          Target: {post.targetDate} (Overdue by{" "}
                          {Math.abs(getDaysUntilTarget(post.targetDate!))} days)
                        </p>
                        <div className="flex items-center space-x-2 mb-2">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              post.status
                            )}`}
                          >
                            {getStatusIcon(post.status)} {post.status}
                          </span>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                              post.priority
                            )}`}
                          >
                            {post.priority}
                          </span>
                        </div>
                        {post.notes && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            {post.notes}
                          </p>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        {post.status !== "published" && (
                          <select
                            value={post.status}
                            onChange={(e) =>
                              updatePostStatus(
                                post.id,
                                e.target.value as LocalBlogPost["status"]
                              )
                            }
                            className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700"
                          >
                            <option value="idea">Idea</option>
                            <option value="planning">Planning</option>
                            <option value="writing">Writing</option>
                            <option value="reviewing">Reviewing</option>
                            <option value="published">Published</option>
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Upcoming Posts */}
          {upcomingPosts.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                📅 Upcoming Posts ({upcomingPosts.length})
              </h2>
              <div className="space-y-4">
                {upcomingPosts.map((post) => (
                  <div
                    key={post.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          Target: {post.targetDate} (in{" "}
                          {getDaysUntilTarget(post.targetDate!)} days)
                        </p>
                        <div className="flex items-center space-x-2 mb-2">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              post.status
                            )}`}
                          >
                            {getStatusIcon(post.status)} {post.status}
                          </span>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                              post.priority
                            )}`}
                          >
                            {post.priority}
                          </span>
                        </div>
                        {post.notes && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            {post.notes}
                          </p>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <select
                          value={post.status}
                          onChange={(e) =>
                            updatePostStatus(
                              post.id,
                              e.target.value as LocalBlogPost["status"]
                            )
                          }
                          className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700"
                        >
                          <option value="idea">Idea</option>
                          <option value="planning">Planning</option>
                          <option value="writing">Writing</option>
                          <option value="reviewing">Reviewing</option>
                          <option value="published">Published</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">📝 All Blog Posts</h2>
            {posts.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <p>No blog posts yet. Add your first idea above!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          Created: {post.createdAt} | Updated: {post.updatedAt}
                          {post.targetDate && ` | Target: ${post.targetDate}`}
                        </p>
                        <div className="flex items-center space-x-2 mb-2">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              post.status
                            )}`}
                          >
                            {getStatusIcon(post.status)} {post.status}
                          </span>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                              post.priority
                            )}`}
                          >
                            {post.priority}
                          </span>
                          {post.category && (
                            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                              {post.category}
                            </span>
                          )}
                        </div>
                        {post.notes && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            {post.notes}
                          </p>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <select
                          value={post.status}
                          onChange={(e) =>
                            updatePostStatus(
                              post.id,
                              e.target.value as LocalBlogPost["status"]
                            )
                          }
                          className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700"
                        >
                          <option value="idea">Idea</option>
                          <option value="planning">Planning</option>
                          <option value="writing">Writing</option>
                          <option value="reviewing">Reviewing</option>
                          <option value="published">Published</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
