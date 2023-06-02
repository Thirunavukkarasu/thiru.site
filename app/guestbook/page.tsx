import type { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { SignIn, SignOut } from './actions'
import Form from './form'
import { prisma } from '@/lib/prisma'

async function getGuestbook() {
  const data = await prisma.guestbook.findMany({})

  return data
}

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
}

export const dynamic = 'force-dynamic'

export default async function GuestbookPage() {
  let entries: any = []
  let session

  try {
    const [guestbookRes, sessionRes] = await Promise.allSettled([
      getGuestbook(),
      getServerSession(authOptions),
    ])

    if (guestbookRes.status === 'fulfilled' && guestbookRes.value[0]) {
      entries = guestbookRes.value
    } else {
      console.error(guestbookRes)
    }

    if (sessionRes.status === 'fulfilled') {
      session = sessionRes.value
    } else {
      console.error(sessionRes)
    }
  } catch (error) {
    console.error(error)
  }

  return (
    <section>
      <h1 className="mb-5 font-serif text-3xl font-bold">Guestbook</h1>
      {session?.user ? (
        <>
          <Form />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      {entries.map((entry) => (
        <div key={entry.id} className="mb-4 flex flex-col space-y-1">
          <div className="w-full break-words text-sm">
            <span className="mr-1 text-neutral-600 dark:text-neutral-400">
              {entry.created_by}:
            </span>
            {entry.body}
          </div>
        </div>
      ))}
    </section>
  )
}
