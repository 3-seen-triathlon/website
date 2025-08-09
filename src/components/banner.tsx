import { ArrowLongRightIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { cookies } from 'next/headers'

export default function Banner() {
  const cookieStore = cookies()
  const cookie = cookieStore.get('banner')
  let disabled = false

  if (cookie && cookie.value === 'set') {
    disabled = true
  }

  return (
    <>
      {(!disabled || `${disabled}` !== 'set') && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:px-6 sm:pb-5 lg:px-8 z-50">
          <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-rose-600 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4">
            <div>
              <p className="text-sm/6 text-white">
                <a href="https://onreg.datasport.com/en/dreiseentriathlon-2025" target='_blank' className='inline-flex items-center gap-x-3 flex-wrap'>
                  <strong className="font-semibold">Triathlon ausverkauft!</strong>{` `}
                  <span className='italic'>Stafetten-Startplätze noch vorhanden</span>
                  <ArrowLongRightIcon className='w-4 h-4' />
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
