import PageTitle from '@/components/PageTitle'
import UsersTable from '@/components/UsersTable'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <UsersTable/>
      </div>
  )
}
