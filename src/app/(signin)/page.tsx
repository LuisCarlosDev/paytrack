import Image from 'next/image'
import Form from './_components/form'

export default async function Signin() {
  return (
    <div className="grid min-h-screen select-none grid-cols-2">
      <div className="flex h-full flex-col justify-center border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex flex-col items-center gap-3 self-center text-lg text-foreground">
          <Image
            src="/images/logo.png"
            alt="PayTrack Logo"
            height={59}
            width={214}
          />

          <span className="font-semibold">Sitesma de controle financeiro</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Faça o acompanhamento dos pagementos!
            </p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  )
}
