'use client'

import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { Field, Input, Label } from '@headlessui/react'
import { clsx } from 'clsx'
import { Button } from '@/components/button'
import mailchimp from '@mailchimp/mailchimp_marketing';
import Notification from '@/components/notification'
import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { useState } from 'react'

mailchimp.setConfig({
  apiKey: process.env.NEXT_MAILCHIMP as string,
  server: "us16",
});

function NewsletterSignup() {
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
    <div className="max-w-2xl">
      <Notification
        showNotification={show}
        setShowNotification={setShow}
        title={title}
        text={text}
        success={success}
      />

      <form onSubmit={handler} className="">
        <Field className="mt-8 space-y-3">
          <Label className="text-sm/5 font-medium">Email</Label>
          <Input
            required
            type="email"
            name="email"
            className={clsx(
              'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
              'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
              'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
            )}
          />
        </Field>
        <div className="mt-8">
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
  )
}

export default function Signup() {
  return (
    <Container className="mt-16 mb-32">
      <Subheading>Anmeldung</Subheading>
      <Heading as="h3" className="mt-2">
        Die Anmeldung ist noch nicht offen.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Du kannst dich aber gerne für den Newsletter anmelden - wir halten dich auf dem Laufenden!
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Nach der Pause im Jahr 2024 gehen wir nochmals über die Bücher und schauen, was wir besser und effizienter machen können.
            Das bedeutet mehr Planung - deshalb sind wir nocht nicht ganz ready für die Anmeldung.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Sobald wir wissen, was / wie / wo schauen wir mit Datasport, dass wir die Anmeldung aufmachen können.
            Du hörst von uns - schon bald!
          </p>
          <div className='mt-16'>
            <Subheading>Newsletter Anmeldung</Subheading>
            <NewsletterSignup />
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt="Plannung von der Dreiseenstafette 2025"
              src="/images/2024_event_planning.png"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

