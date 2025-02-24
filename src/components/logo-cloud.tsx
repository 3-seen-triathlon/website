import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-center gap-x-8 md:gap-x-12 xl:gap-x-24 ',
        'transition',
      )}
    >
      <a href='https://www.mobiliar.ch/generalagenturen/frauenfeld' target='_blank'>
        <img
          alt="Die Mobiliar Generalagentur Frauenfeld"
          src="/logo/mobiliar.png"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
        />
      </a>
      <a href='https://www.raiffeisen.ch/seeruecken/de.html' target='_blank'>
        <img
          alt="Raiffeisenbank Seerücken"
          src="/logo/raiffeisen.png"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
        />
      </a>
    </div>
  )
}
