'use client'

import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { Field, Input, Label } from '@headlessui/react'
import { clsx } from 'clsx'
import { Button } from '@/components/button'
import mailchimp from '@mailchimp/mailchimp_marketing';
import Notification from '@/components/notification'
import { useState } from 'react'
import { Heading, Lead, Subheading } from '@/components/text'
import { Container } from '@/components/container'

mailchimp.setConfig({
  apiKey: process.env.NEXT_MAILCHIMP as string,
  server: "us16",
});

export default function NewsletterSignup() {
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(true)
  const [title, setTitle] = useState('test')
  const [text, setText] = useState('test')
  const [loading, setLoading] = useState(false);

  const handler = async (event: any) => {
    event.preventDefault()
    setLoading(true);

    const response = await fetch('/api/newsletter', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: event.target.email.value,
      }),
    })

    const data = await response.json()

    setLoading(false);

    if (data.error !== '') {
      console.log(data.error)
      setTitle('Ups! Da ging etwas schief.')
      setText('Bitte probier es nochmals oder kontaktiere uns.')
      setSuccess(false)
      setShow(true)
    } else {
      setTitle('Done!')
      setText('Danke für deine Anmeldung.')
      setSuccess(true)
      setShow(true)
      event.target.reset()
    }

    setTimeout(() => {
      setShow(false)
    }, 7000)
  }

  return (
    <Container className="my-12 md:my-16 flex justify-center">
      <div className=''>
        <Lead className="max-w-3xl">
          Für den Newsletter anmelden
        </Lead>
        <div className="">

          <Notification
            showNotification={show}
            setShowNotification={setShow}
            title={title}
            text={text}
            success={success}
          />

          <form onSubmit={handler} className="max-w-full">
            <Field className="mt-8 space-y-3 w-full">
              <Label className="text-sm/5 font-medium hidden">Email</Label>
              <Input
                required
                type="email"
                placeholder='Emailadresse'
                name="email"
                className={clsx(
                  'block w-full rounded-full border border-transparent shadow ring-1 ring-black/10',
                  'px-3 py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <div className="mt-6">
              <Button type='submit' variant='red' className={'w-full'}>
                Anmelden
                {!loading && (
                  <ArrowLongRightIcon className="size-5" />
                )}
                {loading && (
                  <svg className="animate-spin ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}
