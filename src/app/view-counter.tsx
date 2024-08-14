import { kv } from "@vercel/kv";
import { Suspense } from "react";

export default async function ViewCounter({ slug }: any) {
  const views: any = await kv.get(slug);

  return (
    <Suspense fallback={<p className="h-5" />}>
      <p>{Intl.NumberFormat("en-us").format(views)} views</p>
    </Suspense>
  );
}
