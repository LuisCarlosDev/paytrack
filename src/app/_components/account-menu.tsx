'use client'

import { signOut, useSession } from 'next-auth/react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

import { ChevronDown, User, LogOut } from 'lucide-react'

export function AccountMenu() {
  const { data } = useSession()

  console.log(data)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          {data?.user?.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          {/* <span>Luis Carlos</span> */}
          <span className="text-normal text-xs text-muted-foreground">
            {data?.user?.email}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Perfil do usuário</span>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-rose-500 hover:text-rose-600">
          <button
            className="w-full"
            onClick={() =>
              signOut({
                callbackUrl: '/',
                redirect: true,
              })
            }
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
