import {Button} from '@/components/ui/button'

const StatusSuccess = ({
  setIsSuccess,
}: {
  setIsSuccess: (isSuccess: React.SetStateAction<boolean>) => void
}) => {
  return (
    <div className='p-6 bg-green-50 rounded-lg text-center'>
      <h3 className='text-lg font-medium text-green-800'>
        Thank you for your message!
      </h3>
      <p className='mt-2 text-green-700'>
        We&rsquo;ll get back to you as soon as possible.
      </p>
      <Button
        className='mt-4'
        variant='outline'
        onClick={() => setIsSuccess(false)}
      >
        Send another message
      </Button>
    </div>
  )
}

export default StatusSuccess
