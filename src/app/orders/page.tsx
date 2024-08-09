import React from 'react'
import {TableDemo as OrderTable} from '@/components/OrderTable'
import PageTitle from '@/components/PageTitle'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Orders" />
      <div className='p-3'><OrderTable/></div>
    </div>
  )
}
