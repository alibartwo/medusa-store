import Image from "next/image"
import React from "react"

const AboutUs = () => {
  return (
    <section className="py-16 px-36 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/about-us.png"
            alt="Biz Kimiz?"
            width={800}
            height={800}
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="h-full w-full md:w-1/2 md:-ml-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">BİZ KİMİZ?</h2>

          <p className="text-lg mb-6">
            Pitakı; zarafeti ve kaliteyi bir arada sunan, gümüş takı ve
            aksesuarlar tasarlayan öncü bir markadır. Her parçada estetik
            detayları ve uzun ömürlü malzemeyi bir arada buluşturmayı
            hedefliyoruz.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Vizyon</h3>
            <p className="text-base leading-relaxed">
              Dünya çapında gümüş takı sektöründe yenilikçi tasarımlarla
              tanınan, sürdürülebilir ve sorumlu üretimiyle örnek gösterilen bir
              marka olmak.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Misyon</h3>
            <p className="text-base leading-relaxed">
              Müşterilerimize modayı takip eden değil, modayı belirleyen
              koleksiyonlar sunmak; her bütçeye uygun, kaliteli ve özgün
              tasarımlar üretmek.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
