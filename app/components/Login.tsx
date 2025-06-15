"use client"
import React from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

const Login = () => {
  return (
    <Button
      variant="outline"
      className="text-lg px-6 py-4"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
    >
      Login with Google
    </Button>
  )
}

export default Login
