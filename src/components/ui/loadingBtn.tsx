import React from 'react'
import { Button } from './button'
import {RotateCcw } from "lucide-react";

type Props = {}

export default function LoadingBtn({}: Props) {
  return (
    <div className="flex w-full h-screen justify-center items-center">
    <Button className="w-36" variant={"secondary"}>
    <RotateCcw  className="mr-2 h-4 w-4 animate-spin " />
    Please wait
  </Button>
</div>
  )
}
