"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-large-semi mb-6">PİTAKI ÜYESİ OLUN</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Pitakı üye profilinizi oluşturun ve gelişmiş bir alışveriş deneyimine
        erişin.{" "}
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="İsim"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Soyisim"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="E-Posta"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="Telefon"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label="Şifre"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Bir hesap oluşturarak Pitakı'nın{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Gizlilik Politikası
          </LocalizedClientLink>
          &apos;nı ve{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Kullanım Koşulları
          </LocalizedClientLink>
          &apos;nı kabul etmiş olursunuz.
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">
          Üye Ol
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Zaten üye misiniz?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Giriş yapın
        </button>
        .
      </span>
    </div>
  )
}

export default Register
