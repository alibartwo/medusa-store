import InteractiveLink from "@modules/common/components/interactive-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
  description: "Bir şeyler ters gitti",
}

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Sayfa Bulunamadı</h1>
      <p className="text-small-regular text-ui-fg-base">
        Erişmeye çalıştığınız sayfa mevcut değil.
      </p>
      <InteractiveLink href="/">Ön sayfaya git</InteractiveLink>
    </div>
  )
}
