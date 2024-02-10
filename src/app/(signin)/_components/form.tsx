'use client'

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  

  const handleLogin = async () => {
    await signIn(); //.then(redirect('/home'))
  }

  return (
    <form className="space-y-4 flex flex-col">
      {/* <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input id="email" type="email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Sua senha</Label>
        <Input id="password" type="password" />
      </div>

      <Button className="w-full">Entrar no painel</Button>

      <span className="text-sm text-muted-foreground self-center">ou</span> */}

      <Button
        className="gap-2"
        variant="outline"
        onClick={handleLogin}
      >
        <Image
          src={"/icons/google-icon.svg"}
          alt="Google Logo"
          height={20}
          width={20}
        />

        Entrar com Google
      </Button>
    </form>
  )
}