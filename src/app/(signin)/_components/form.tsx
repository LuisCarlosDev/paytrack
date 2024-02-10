'use client'

import { Button } from '@/app/_components/ui/button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function Form() {
  const handleLogin = async () => {
    await signIn()
  }

  return (
    <form className="space-y-4 flex flex-col">
      <Button className="gap-2" variant="outline" onClick={handleLogin}>
        <Image
          src={'/icons/google-icon.svg'}
          alt="Google Logo"
          height={20}
          width={20}
        />
        Entrar com Google
      </Button>
    </form>
  )
}
