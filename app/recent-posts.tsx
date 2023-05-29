import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { formatDate } from '@/lib/utils'
import ViewCounter from './view-counter'

export default function RecentPosts() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  const recentPosts = posts.slice(0, 3)

  return (
    <section className="">
      <h1 className="text-lg font-semibold text-gray-700">Recent Posts</h1>
      <p className="text-base text-gray-600">
        Dive into My Adventures: A Collection of Explorations and Discoveries..
      </p>
      <div className="mt-5">
        {recentPosts?.length ? (
          <div className="grid gap-4">
            {recentPosts.map((post) => (
              <article
                key={post._id}
                className="group relative flex flex-row justify-between space-y-2 border-gray-200 py-2"
              >
                <div>
                  <h2 className="text-base font-bold text-gray-700 underline">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-gray-500">{post.description}</p>
                  )}
                </div>
                <div>
                  {post.date && (
                    <>
                      <p className="text-sm text-gray-500">
                        {formatDate(post.date)}
                      </p>
                      {/* @ts-expect-error Async Server Component */}
                      <ViewCounter slug={post.slug} />
                    </>
                  )}
                  <Link
                    href={post.slug}
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
  )
}
