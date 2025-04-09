'use client'
import React from 'react'
import {Link} from 'next-view-transitions'

import {Button} from '@/components/ui/button'

const ButtonTransition = () => {
  function slideInOut() {
    console.log('slideInOut')
    document.documentElement.animate([
      {
        opacity: 1,
        transform: 'translateY(0)',
        backgroundColor: 'black',
      },
      {
        opacity: 0.2,
        transform: 'translateY(-55%)',
        backgroundColor: 'red',
      },
    ])
  }
  return (
    <Link
      onTransitionRun={slideInOut}
      href='/drawer'
    >
      <Button>MB Bank Builder</Button>
    </Link>
  )
}

export default ButtonTransition
