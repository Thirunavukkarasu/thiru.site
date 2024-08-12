import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { formatDate } from "@/lib/date";

interface PostPageProps {
  params: {
    slug: string[];
  };
}
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
const allAuthors: any = [];

async function getPostFromParams(params: any) {
  const slug = params?.slug?.join("/");

  const post = allPosts.find((post: any) => {
    console.log(post.slug, slug);
    return post.slug === slug;
  });

  console.log("post", post);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    authors: post?.authors?.map((author: any) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      //   url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post: any = await getPostFromParams(params);
  //Note: Using Vercel KV Increment view counter slug value by One
  //   await kv.incr(post.slug)

  if (!post) {
    notFound();
  }

  const authors = post?.authors?.map((author: any) =>
    allAuthors.find(({ slug }: any) => slug === `/authors/${author}`)
  );

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        {post.date && (
          <div className="flex space-x-3">
            <time dateTime={post.date} className="block text-sm text-gray-500">
              Published on {formatDate(post.date)}
            </time>
            {/* <ViewCounter slug={post.slug} /> */}
          </div>
        )}
        <h1 className="mt-2 inline-block text-3xl leading-tight text-gray-700">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author: any) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-gray-500">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="bg-muted my-8 rounded-md border transition-colors"
          priority
        />
      )}
      {/* <Mdx code={post.body.code} /> */}
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className="inline-flex">
          <ArrowIcon />
          <span>See all posts</span>
        </Link>
      </div>
    </article>
  );
}
