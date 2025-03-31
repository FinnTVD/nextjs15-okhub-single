import FormContact from '@/app/[locale]/components/_components/FormContact'
import SWRTest from '@/app/[locale]/components/_components/SWRTest'
import {Button} from '@/components/ui/button'
import {Link} from '@/i18n/navigation'
import {setRequestLocale} from 'next-intl/server'
import {unstable_ViewTransition as ViewTransition} from 'react'

export default async function page({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <ViewTransition>
      <main className='overflow-hidden'>
        <div className='flex justify-center'>
          <ViewTransition name='experimental-label'>
            <h1 className='text-3xl'> FINN TVD</h1>
          </ViewTransition>
        </div>
        <div className='space-x-[1rem] mt-[5rem]'>
          <Button>
            <Link
              locale='vi'
              href='/'
            >
              HOME
            </Link>
          </Button>
        </div>

        <FormContact />
        <SWRTest />
      </main>
    </ViewTransition>
  )
}
