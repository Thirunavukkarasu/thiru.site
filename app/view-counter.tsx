import { kv } from '@vercel/kv'

export default async function ViewCounter({ slug }: any) {
  const views: any = await kv.get(slug)

  return <p>{Intl.NumberFormat('en-us').format(views)} views</p>
}
