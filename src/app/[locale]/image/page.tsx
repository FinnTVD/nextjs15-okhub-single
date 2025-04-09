import Image from 'next/image'

const Page = () => {
  return (
    <div className='flex w-full h-screen'>
      <Image
        className='flex-1/2 h-auto object-cover'
        src={'/background-okhub.jpg'}
        alt=''
        width={1600}
        height={1600}
      />
      <Image
        className='flex-1/2 h-auto object-cover'
        src={'/background-okhub.jpg'}
        alt=''
        width={1920}
        height={1920}
      />
    </div>
  )
}

export default Page
