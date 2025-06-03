import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Giriş Yap",
  description: "Sign in to your Medusa Store account.",
}

export default function Login() {
  return <LoginTemplate />
}
