import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "./db/blog";
import { formatDate } from "@/lib/date";
import ViewCounter from "./view-counter";

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
      {/* <p className="text-base text-gray-600">
        A collection of thoughts, ideas, and projects.
      </p> */}
      <div className="mt-5">
        {recentPosts?.length ? (
          <div className="grid gap-4">
            {recentPosts.map((post: any) => (
              <article
                key={post._id}
                className="group relative flex flex-row space-x-4 border-gray-200 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                {/* Marketing Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {post.metadata.image ? (
                      <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                        sizes="96px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.metadata.title}
                  </h2>
                  {post.metadata.summary && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                      {post.metadata.summary}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-400 dark:text-gray-500">
                    {post.metadata.publishedAt && (
                      <span>{formatDate(post.metadata.publishedAt)}</span>
                    )}
                    <ViewCounter slug={post.slug} />
                  </div>
                </div>

                {/* Link overlay */}
                <Link
                  href={`blog/${post.slug}`}
                  className="absolute inset-0"
                  prefetch={false}
                >
                  <span className="sr-only">View Article</span>
                </Link>
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
