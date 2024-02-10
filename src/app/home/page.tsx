'use client'
import { signOut } from 'next-auth/react'
import { Button } from '../_components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Button onClick={() => signOut()}>Sair</Button>
      <h1>Home</h1>
    </div>
  )
}
