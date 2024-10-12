import clsx from "clsx";

export function Video({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <video
      className={clsx(
        className,
      )}

      autoPlay={true}
      loop={true}
      muted={true}
    >
      <source src="https://tinyrocket.fra1.digitaloceanspaces.com/dreiseenstafette/dreiseenstafette_hero.mp4" type='video/mp4' />
      <img src="/images/fallback.png" title="Your browser does not support the <video> tag" />
    </video>
  )
}
