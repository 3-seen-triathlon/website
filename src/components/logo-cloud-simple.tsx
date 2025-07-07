import { Container } from "./container";
import { Heading, Lead, Subheading } from "./text";
import sponsors from '../data/data.json'

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

        <div className="grid-cols-2 grid-cols-3 grid-cols-4" />

        <div className="space-y-8">
          {sponsors.categories.map(category => (
            <div key={category.name}>
              {category.partner.length > 0 && (
                <div>
                  <Lead>{category.name}</Lead>
                  <div className={`mt-6 -mx-6 grid grid-cols-${category.grid} gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-${category.grid}`}>
                    {category.partner.map(sponsor => (
                      <a href={sponsor.link} target="_blank" key={sponsor.name} className="bg-gray-400/5 p-4 sm:p-8 grid grid-cols-1 gap-y-10 align-middle text-center">
                        <div key={sponsor.name} className="flex justify-center flex-wrap items-center gap-y-2 sm:gap-y-4">
                          <img
                            key={sponsor.logo}
                            alt={sponsor.name}
                            src={sponsor.logo}
                            width={200}
                            height={50}
                            className="max-h-12 md:max-h-20 w-full object-contain"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
