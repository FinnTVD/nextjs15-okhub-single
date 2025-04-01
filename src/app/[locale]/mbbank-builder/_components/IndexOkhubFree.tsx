'use client'

import dynamic from 'next/dynamic'
const IndexGrapejs = dynamic(
  () => import('@/app/[locale]/mbbank-builder/_components/IndexGrapejs'),
  {ssr: false},
)

const IndexOkhubFree = () => {
  return (
    <>
      <IndexGrapejs />
    </>
  )
}

export default IndexOkhubFree
