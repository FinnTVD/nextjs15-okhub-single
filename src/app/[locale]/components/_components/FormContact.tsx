'use client'

import {Button} from '@/components/ui/button'
import CF7Request from '@/fetches/cf7Request'
import contactSchema from '@/schemas/contact.schema'
import endpoints from '@/lib/endpoints'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {toast} from 'sonner'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {cn, delay} from '@/lib/utils'
import LoadingCircleSpin from '@/components/loading/LoadingCircleSpin'
import {Mail} from 'lucide-react'
// import StatusSuccess from '@/app/[locale]/components/_components/StatusSuccess'
import dynamic from 'next/dynamic'
const StatusSuccess = dynamic(
  () => import('@/app/[locale]/components/_components/StatusSuccess'),
  {
    loading: () => <h2>Loading...</h2>,
  },
)

type FormValues = z.infer<typeof contactSchema>
const FormContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    // const submitData = async () => {
    //   const cf7 = new CF7Request({
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     message: data.message || '',
    //   })
    //   return await cf7.send(endpoints.contactForm)
    // }
    await delay(5000)
      .then(() => {
        setIsSuccess(true)
        form.reset()
      })
      .catch(() => {
        toast.error('Something went wrong')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }
  return (
    <div className='w-[50rem] mx-auto'>
      {isSuccess ? (
        <StatusSuccess setIsSuccess={setIsSuccess} />
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4'
            autoComplete='off'
          >
            <FormField
              control={form.control}
              name='name'
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Name *'
                      {...field}
                      className='h-14 px-4 bg-white border-gray-200'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder='Email *'
                        {...field}
                        className='h-14 px-4 bg-white border-gray-200'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='phone'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder='Phone *'
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value
                          // Use a regex to remove any characters except digits, "+" and "-"
                          const filteredValue = value.replace(
                            /[^+\-\(\)\d]/g,
                            '',
                          )
                          field.onChange(filteredValue) // Update the form field with the filtered value
                        }}
                        className='h-14 px-4 bg-white border-gray-200'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='message'
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder='Message'
                      {...field}
                      className='min-h-[130px] px-4 py-3 bg-white border-gray-200 resize-none'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type='submit'
              disabled={isSubmitting}
              className={cn(
                'h-[2.5rem] px-8 bg-[#1CD4B5] hover:bg-[#19c0a3] text-white font-medium relative',
                isSubmitting && 'pointer-events-none',
              )}
            >
              {isSubmitting && (
                <div className='absolute-center size-[1.5rem] flex-center'>
                  <LoadingCircleSpin className='!size-full text-white' />
                </div>
              )}
              <div
                className={cn('flex items-center', isSubmitting && 'opacity-0')}
              >
                SUBMIT
                <Mail className='ml-2 h-5 w-5' />
              </div>
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}

export default FormContact
