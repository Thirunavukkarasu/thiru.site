import Link from "next/link";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/date";

export const metadata = {
  title: "Blog",
};
const allPosts: any = [
  {
    _id: "1",
    title: "First Post",
    description: "This is the first post.",
    date: "2021-01-01",
    slug: "first-post",
    published: true,
  },
  {
    _id: "2",
    title: "Second Post",
    description: "This is the second post.",
    date: "2021-02-01",
    slug: "second-post",
    published: true,
  },
  {
    _id: "3",
    title: "Third Post",
    description: "This is the third post.",
    date: "2021-03-01",
    slug: "third-post",
    published: true,
  },
];

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
  );
}
export default async function BlogPage() {
  const posts = allPosts
    .filter((post: any) => post.published)
    .sort((a: any, b: any) => {
      return compareDesc(new Date(a.date), new Date(b.date));
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
          {posts.map((post: any) => (
            <>
              <BlogPost post={post} key={post._id} />
            </>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
