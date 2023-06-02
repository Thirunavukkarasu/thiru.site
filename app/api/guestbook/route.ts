import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

export async function POST(req: Request) {
  const session: any = await getServerSession(authOptions)
  if (!session || !session.user) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 403,
    })
  }

  const { user } = session
  const email: any = user.email
  const json = await req.json()

  if (req.method === 'POST') {
    await prisma.guestbook.create({
      data: {
        email,
        body: json.body,
        created_by: user?.name,
      },
    })

    return new Response(JSON.stringify({ error: null }))
  }

  return new Response(JSON.stringify({ message: 'Method not allowed' }), {
    status: 500,
  })
}
