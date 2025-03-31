'use client'
// import SheetTest from '@/app/[locale]/drawer/_components/SheetTest'
import dynamic from 'next/dynamic'
const SheetTest = dynamic(
  () => import('@/app/[locale]/drawer/_components/SheetTest'),
  {
    loading: () => <div>Loading...</div>,
    // ssr: false,
  },
)
import {Button} from '@/components/ui/button'
import {useState} from 'react'

const IndexDrawer = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        variant='outline'
      >
        Open Sheet
      </Button>
      {open && (
        <SheetTest
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  )
}

export default IndexDrawer
