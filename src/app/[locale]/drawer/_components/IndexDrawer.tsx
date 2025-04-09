'use client'

// Dynamic import
// import dynamic from 'next/dynamic'
// const SheetTest = dynamic(
//   () => import('@/app/[locale]/drawer/_components/SheetTest'),
// )

// // Lazy load
// const SheetTest2 = lazy(
//   () => import('@/app/[locale]/drawer/_components/SheetTest2'),
// )

import {Button} from '@/components/ui/button'
import React, {lazy, Suspense, useState} from 'react'
import {Link} from 'next-view-transitions'
import SheetTest from '@/app/[locale]/drawer/_components/SheetTest'
import SheetTest2 from '@/app/[locale]/drawer/_components/SheetTest2'

const IndexDrawer = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  return (
    <div>
      <Link href='/'>
        <Button>MB Bank Builder</Button>
      </Link>
      <Button
        onClick={() => setOpen(true)}
        variant='outline'
      >
        Open Sheet
      </Button>
      <Button
        onClick={() => setOpen2(true)}
        variant='outline'
      >
        Open Sheet 2
      </Button>
      {/* {open && ( */}
      <SheetTest
        open={open}
        setOpen={setOpen}
      />
      {/* )} */}
      {/* {open2 && ( */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <SheetTest2
        open={open2}
        setOpen={setOpen2}
      />
      {/* </Suspense> */}
      {/* )} */}
    </div>
  )
}

export default IndexDrawer
