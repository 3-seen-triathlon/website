import { Container } from "./container";
import { Heading, Lead, Subheading } from "./text";

const sponsoren = [
  {
    name: "Raiffeisenbank Seerücken",
    logos: [
      "/logo/raiffeisen.png"
    ],
    category: "Hauptsponsor",
  },
  {
    name: "Die Mobiliar Generalagentur Frauenfeld",
    logos: [
      "/logo/mobiliar.png"
    ],
    category: "Hauptsponsor",
  },
  {
    name: "Nüssli",
    logos: [
      "/2025/partner/nussli.png",
    ],
    category: "Olypmic Distance",
  },
  {
    name: "Ruba",
    logos: [
      "/2025/partner/ruba_nussli.png"
    ],
    category: "Olypmic Distance",
  },

  {
    name: "ThurPlus",
    logos: [
      "/2025/partner/thurplus.png"
    ],
    category: "Badekappen",
  },
  {
    name: "EWE Elektro AG",
    logos: [
      "/2025/partner/ewe.png",
    ],
    category: "Supplier"
  },
  {
    name: "Hans Hagen AG",
    logos: [
      "/2025/partner/hans_hagen.png",
    ],
    category: "Supplier"
  },
  {
    name: "Stieger Gartenbau",
    logos: [
      "/2025/partner/stieger.png",
    ],
    category: "Supplier"
  },
  {
    name: "Landi Seebachtal",
    logos: [
      "/2025/partner/landi.png",
    ],
    category: "Supplier"
  },
  {
    name: "Fahnencenter Weinfelden",
    logos: [
      "/2025/partner/fahnencenter.png",
    ],
    category: "Supplier"
  },
  {
    name: "Gebrüder Umbricht",
    logos: [
      "/2025/partner/umbricht.png",
    ],
    category: "Supplier"
  },
]

export default function LogoCloudSimple() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-20">
          <Subheading>Support</Subheading>
          <Heading as="h3" className="mt-2">
            Herzlichen Dank an unsere Partner!
          </Heading>
          <Lead className="mt-6 max-w-3xl">
            Der Event ist von lokalen Unternehmen getragen, ohne deren Support der Wettkampf nicht stattfinden könnte.
          </Lead>
        </div>

        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-2">
          {sponsoren.map(sponsor => (
            <div key={sponsor.name} className="bg-gray-400/5 p-4 sm:p-8 grid grid-cols-1 gap-y-10 align-middle text-center">
              <div key={sponsor.name} className="flex justify-center flex-wrap items-center gap-y-2 sm:gap-y-4">
                {sponsor.logos.map(logo => (
                  <img
                    key={logo}
                    alt={sponsor.name}
                    src={logo}
                    width={200}
                    height={50}
                    className={`${sponsor.logos.length == 1 ? "max-h-12 md:max-h-20" : "max-h-8 md:max-h-10"} w-full object-contain`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
