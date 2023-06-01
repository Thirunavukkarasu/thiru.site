import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  console.log(session, session?.user)
  if (!session || !session.user) {
    return res.status(403).json({ message: 'Unauthorized' })
  }

  const email: any = session.user.email
  const name = session.user.name

  if (req.method === 'POST') {
    await prisma.guestbook.create({
      data: {
        email,
        body: req.body,
        created_by: 'system',
      },
    })

    return res.status(200).json({ error: null })
  }

  return res.send('Method not allowed.')
}
