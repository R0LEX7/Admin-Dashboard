import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  interface Setting {
    category: string;
    value: string | number | boolean;
  }

type Props = {

  data :Setting[]
}

export default function SettingsTable({ data}: Props) {
  return (
    <Table className="overflow-x-auto">

    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">
          Category
        </TableHead>

        <TableHead className="text-right">Value</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((item) => (
        <TableRow key={item.category}>
          <TableCell className="font-medium">{item.category}</TableCell>

          <TableCell className="text-right">{item.value}</TableCell>
        </TableRow>
      ))}
    </TableBody>

  </Table>
  )
}
