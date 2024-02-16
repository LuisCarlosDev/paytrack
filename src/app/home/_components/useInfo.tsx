'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { useSession } from 'next-auth/react'

export function UserInfo() {
  const session = useSession()

  console.log(session)
  return (
    <div>
      <Avatar>
        <AvatarImage src={session.data?.user?.image ?? ''} />
        <AvatarFallback>{session.data?.user?.name ?? 'U'}</AvatarFallback>
      </Avatar>

      <div>
        <strong>{session.data?.user?.name}</strong>
      </div>
    </div>
  )
}
