'use client'

import mailchimp from '@mailchimp/mailchimp_marketing';
import { Lead } from '@/components/text'
import { Container } from '@/components/container'
import { Button } from '@/components/button'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid';

mailchimp.setConfig({
  apiKey: process.env.NEXT_MAILCHIMP as string,
  server: "us16",
});

export default function Contact() {
  return (
    <Container className="my-12 md:my-16 flex justify-center">
      <div className='text-center'>
        <Lead className="max-w-3xl">
          Fragen?
        </Lead>
        <div className="mt-8 space-y-3">
          <Button variant='red' href={'mailto:info@3-seen-triathlon.ch'}>
            Kontakiere uns
            <ArrowLongRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </Container>
  )
}
