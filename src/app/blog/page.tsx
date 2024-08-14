import Link from "next/link";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/date";
import { getBlogPosts } from "../db/blog";
import ViewCounter from "../view-counter";

export const metadata = {
  title: "Blog",
};

async function BlogPost({ post }: any) {
  return (
    <article
      key={post._id}
      className="group relative flex flex-row justify-between space-y-2 border-gray-200 py-2"
    >
      <div>
        <h2 className="text-base font-bold text-gray-700">
          {post.metadata.title}
        </h2>
        {post.metadata.summary && (
          <p className="text-gray-500">{post.metadata.summary}</p>
        )}
      </div>
      <div>
        {post.metadata.publishedAt && (
          <>
            <p className="text-sm text-gray-500">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </>
        )}
        <ViewCounter slug={post.slug} />
        <Link
          href={`blog/${post.slug}`}
          className="absolute inset-0"
          prefetch={false}
        >
          <span className="sr-only">View Article</span>
        </Link>
      </div>
    </article>
  );
}
export default async function BlogPage() {
  let allPosts = getBlogPosts();
  const posts = allPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex-1 space-y-2">
          <h1 className="inline-block text-lg font-semibold tracking-tight text-gray-700 lg:text-xl">
            Blog
          </h1>
          <p className="text-base text-gray-500">
            A collection of thoughts, ideas, and projects.
          </p>
        </div>
      </div>
      <hr className="my-4" />
      {posts?.length ? (
        <div className="grid gap-4">
          {posts.map((post: any, idx: any) => (
            <BlogPost post={post} key={idx} />
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
