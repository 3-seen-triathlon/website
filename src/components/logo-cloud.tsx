import { clsx } from 'clsx'
import sponsors from '../data/sponsors.json'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-center gap-x-2 md:gap-x-4 xl:gap-x-16 ',
        'transition',
      )}
    >
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.alt}
          className='bg-gray-50 hover:bg-gray-100 rounded-4xl p-8 sm:p-12'
          href={sponsor.link}
          target='_blank'
        >
          <img
            alt={sponsor.alt}
            src={sponsor.logo}
            className="h-8 max-sm:mx-auto sm:h-12 lg:h-14"
          />
        </a>
      ))}
    </div>
  )
}
