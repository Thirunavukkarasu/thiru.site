import Link from "next/link";
import { getBlogPosts } from "./db/blog";
import { formatDate } from "@/lib/date";

export default function RecentPosts() {
  const posts = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="">
      <h1 className="text-lg font-semibold text-gray-700">Recent Posts</h1>
      <p className="text-base text-gray-600">
        A collection of thoughts, ideas, and projects.
      </p>
      <div className="mt-5">
        {recentPosts?.length ? (
          <div className="grid gap-4">
            {recentPosts.map((post: any) => (
              <article
                key={post._id}
                className="group relative flex flex-row justify-between space-y-2 border-gray-200 py-2"
              >
                <div>
                  <h2 className="text-base font-bold text-gray-700 underline">
                    {post.metadata.title}
                  </h2>
                  {post.metadata.summary && (
                    <p className="text-gray-500">{post.metadata.summary}</p>
                  )}
                </div>
                <div>
                  {post.metadata.publishedAt && (
                    <>
                      {/* <p className="text-sm text-gray-500">
                        {formatDate(post.metadata.publishedAt)}
                      </p> */}
                      {/* <ViewCounter slug={post.slug} /> */}
                    </>
                  )}
                  <Link
                    href={`blog/${post.slug}`}
                    className="absolute inset-0"
                    prefetch={false}
                  >
                    <span className="sr-only">View Article</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
    </section>
  );
}
