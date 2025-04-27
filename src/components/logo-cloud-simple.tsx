import { Container } from "./container";
import { Heading, Lead, Subheading } from "./text";

const sponsoren = [
  {
    name: "Raiffeisenbank Seerücken",
    logos: [
      "/logo/raiffeisen.png"
    ],
    category: "Hauptsponsor",
    website: "",
  },
  {
    name: "Die Mobiliar Generalagentur Frauenfeld",
    logos: [
      "/logo/mobiliar.png"
    ],
    category: "Hauptsponsor",
    website: "",
  },
  {
    name: "Nüssli",
    logos: [
      "/2025/partner/nussli.png",
      "/2025/partner/ruba_nussli.png"
    ],
    category: "Olypmic Distance",
    website: "",
  },
  {
    name: "ThurPlus",
    logos: [
      "/2025/partner/thurplus.png"
    ],
    category: "Badekappen",
    website: "",
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
            <div key={sponsor.name} className="bg-gray-400/5 p-4 pb-2 sm:p-8 sm:pb-4 grid grid-cols-1 gap-y-10 align-middle text-center">
              <div key={sponsor.name} className="flex justify-center flex-wrap items-center gap-y-2 sm:gap-y-4">
                {sponsor.logos.map(logo => (
                  <img
                    key={logo}
                    alt={sponsor.name}
                    src={logo}
                    width={150}
                    height={50}
                    className={`${sponsor.logos.length == 1 ? "max-h-20" : "max-h-10"} w-full object-contain`}
                  />
                ))}
              </div>
              <Subheading className="italic text-gray-300">{sponsor.category}</Subheading>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
