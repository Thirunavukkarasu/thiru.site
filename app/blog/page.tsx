import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { formatDate } from '@/lib/utils'
import ViewCounter from '../view-counter'

export const metadata = {
  title: 'Blog',
}

async function BlogPost({ post }: any) {
  return (
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
            <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
            {/* @ts-expect-error Async Server Component */}
            <ViewCounter slug={post.slug} />
          </>
        )}
        <Link href={post.slug} className="absolute inset-0" prefetch={false}>
          <span className="sr-only">View Article</span>
        </Link>
      </div>
    </article>
  )
}
export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="container max-w-4xl">
      <div className="flex flex-col">
        <div className="flex-1 space-y-2">
          <h1 className="inline-block text-lg font-semibold tracking-tight text-gray-700 lg:text-xl">
            Blog
          </h1>
          <p className="text-base text-gray-500">
            Dive into My Adventures: A Collection of Explorations and
            Discoveries..
          </p>
        </div>
      </div>
      <hr className="my-4" />
      {posts?.length ? (
        <div className="grid gap-4">
          {posts.map((post) => (
            <>
              {/* @ts-expect-error Async Server Component */}
              <BlogPost post={post} key={post._id} />
            </>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
