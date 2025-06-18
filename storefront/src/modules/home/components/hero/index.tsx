import { ArrrowRight } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full relative bg-cover bg-center border-b border-ui-border-base"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-center items-center text-center px-6 small:px-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-4xl md:text-5xl leading-tight text-white font-semibold"
          >
            Pitakı ile Işılda
          </Heading>
          <Heading
            level="h2"
            className="text-xl md:text-2xl mt-2 text-white font-light"
          >
            Zamansız zarafet. Gümüş takı koleksiyonumuzu keşfedin.
          </Heading>
        </span>
        <a href="/store">
          <Button variant="secondary">
            Keşfetmeye Başlayın
            <ArrrowRight />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
