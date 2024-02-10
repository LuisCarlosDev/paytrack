import Image from 'next/image'
import Form from './_components/form'
import { getServerSession } from 'next-auth'
import { authOptions } from '../_lib/auth'
import { redirect } from 'next/navigation'

export default async function Signin() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/home')
  }

  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-center border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center flex-col gap-3 text-lg text-foreground self-center">
          <Image
            src="/images/logo.png"
            alt="PayTrack Logo"
            height={59}
            width={214}
          />

          <span className="font-semibold">Sitesma de controle financeiro</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Faça o acompanhamento dos pagementos!
            </p>
          </div>

          <Form />
        </div>
      </div>
    </div>
  )
}
