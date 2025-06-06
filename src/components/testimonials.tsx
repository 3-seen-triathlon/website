'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Lead, Subheading } from './text'
import { Button } from './button'

const galleries = [
  {
    img: '/images/2023.png',
    link: 'https://drive.google.com/drive/folders/1dNEiiiV7k0z3ZC5p4ZYt9m7jl6ci6hnR?usp=drive_link',
    result: 'https://www.datasport.com/live/ranking/?racenr=25893',
    quote: 'Dreiseenstafette 2023',
  },
  {
    img: '/images/2022.png',
    link: 'https://drive.google.com/drive/folders/1PuZ-7kzUXJ933dtCg7u6XPAMWx3N54aJ?usp=drive_link',
    result: 'https://www.datasport.com/live/ranking/?racenr=24893',
    quote: 'Dreiseenstafette 2022',
  },
  {
    img: '/images/2021.png',
    link: 'https://drive.google.com/drive/folders/15kTZAtywizSOALuWaJ9Ak25izHL04kVX?usp=drive_link',
    result: 'https://www.datasport.com/live/ranking/?racenr=23893',
    quote: 'Dreiseenstafette 2021',
  },
]

function TestimonialCard({
  img,
  link,
  result,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string
  link: string
  result: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      {...props}
      className="relative flex aspect-[9/16] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4] sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
      />
      <figure className="relative p-10 space-y-4 transition">
        <p className="relative text-xl/7 text-white">
          {children}
        </p>
        <div className='flex flex-wrap gap-4'>
          <div>
            <Button variant='red_outline' target='_blank' href={result} >
              Resultate
              <ArrowLongRightIcon className="size-5" />
            </Button>
          </div>
          <div>
            <Button variant='red_outline' target='_blank' href={link} >
              Bilder
              <ArrowLongRightIcon className="size-5" />
            </Button>
          </div>
        </div>
      </figure>
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-sm text-sm/6 text-gray-600">
        Join the best sellers in the business and start using Radiant to hit
        your targets today.
      </p>
      <div className="mt-2">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-rose-600"
        >
          Get started
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden py-12 sm:py-16">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>Das ist die DSS</Subheading>
          <Heading as="h3" className="mt-2">
            Frühere Austragungen.
          </Heading>
          <Lead className="mt-6 max-w-3xl">
            Von der Dreiseenstafette zum 3-Seen-Triathlon; ab 2025 liegt der Fokus auf dem Triathlon - du kannst aber immer noch als Team starten.
          </Lead>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
        ])}
      >
        {galleries.map(({ img, result, link, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            img={img}
            result={result}
            link={link}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialCard>
        ))}
        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-center">
          <div className="hidden sm:flex sm:gap-2">
            {galleries.map(({ quote }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${quote}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-[active]:bg-gray-400 data-[hover]:bg-gray-400',
                  'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
