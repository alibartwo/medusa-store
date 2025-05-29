import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "Bir şeyler ters gitti",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Sayfa bulunamadı</h1>
      <p className="text-small-regular text-ui-fg-base">
        Erişmeye çalıştığınız sayfa mevcut değil.
      </p>
      <InteractiveLink href="/">Go to frontpage</InteractiveLink>
    </div>
  )
}
