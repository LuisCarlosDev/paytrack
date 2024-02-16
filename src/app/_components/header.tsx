import Image from 'next/image'
import { AccountMenu } from './account-menu'

export async function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Image
          src="/images/logo.png"
          alt="PayTrack Logo"
          width={100}
          height={48}
          priority
        />

        <div className="ml-auto flex items-center gap-2">
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
