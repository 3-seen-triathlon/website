import { Container } from "./container";
import { Heading, Lead, Subheading } from "./text";

const sponsoren = [
  {
    name: "Nüssli",
    logos: [
      "/2025/partner/nussli.png",
      "/2025/partner/ruba_nussli.png"
    ],
    website: "",
  },
  {
    name: "Landi",
    logos: [
      "/2025/partner/landi.png"
    ],
    website: "",
  },
  {
    name: "ThurPlus",
    logos: [
      "/2025/partner/thurplus.png"
    ],
    website: "",
  },
]

export default function LogoCloudSimple() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-20">
          <Subheading>Partner</Subheading>
          <Heading as="h3" className="mt-2">
            Kategoriensponsoren
          </Heading>
          <Lead className="mt-6 max-w-3xl">
            Herzlichen Dank für die Unterstützung!
          </Lead>
        </div>

        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {sponsoren.map(sponsor => (
            <div key={sponsor.name} className="bg-gray-400/5 p-4 sm:p-8 flex justify-center flex-wrap items-center gap-y-5">
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
          ))}
        </div>
      </div>
    </Container>
  )
}
