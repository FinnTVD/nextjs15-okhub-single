'use server'
import ButtonTransition from '@/app/[locale]/_components/ButtonTransition'
import ImageFallback from '@/components/image/ImageFallback'
import {Button} from '@/components/ui/button'
import {Link} from '@/i18n/navigation'
import {cn} from '@/lib/utils'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {unstable_ViewTransition as ViewTransition} from 'react'

export default async function Home({
  params,
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params

  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations({locale, namespace: 'home'})
  return (
    <main>
      <ViewTransition name='experimental-label'>
        <h1 className='text-3xl'> FINN TVD</h1>
      </ViewTransition>
      <div className='w-full h-screen bg-white text-black flex flex-col items-center'>
        <div className='flex flex-col'>
          <h2 className='text-center'>{t('title')}</h2>
          <div className={cn('space-x-[1rem] mt-[5rem]')}>
            <Button>
              <Link
                locale='en'
                href='/'
              >
                English
              </Link>
            </Button>
            <Button>
              <Link
                locale='vi'
                href='/'
              >
                Vietnamese
              </Link>
            </Button>
          </div>
          <div className='space-x-[1rem] mt-[5rem]'>
            <Button>
              <Link
                locale='vi'
                href='/components'
              >
                Components
              </Link>
            </Button>
            <ButtonTransition />
          </div>
        </div>
        {/* <FormAuth session={session} />
        <Pagination /> */}
        <ImageFallback
          className='mt-4'
          src={'/logo.png'}
          width={200}
          height={200}
          alt='logo'
        />
      </div>
    </main>
  )
}
