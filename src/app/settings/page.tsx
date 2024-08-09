/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import SettingsTable  from "@/components/SettingsTable";

import React from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";

type Props = {};

interface Setting {
  category: string;
  value: string | number | boolean;
}


const data: Setting[] = [
  {
    category: "Account",
    value: "Verified"
  },
  {
    category: "Notifications",
    value: "ON"
  },
  {
    category: "Language",
    value: "English"
  },
  {
    category: "Email",
    value: "himanshugola1111@gmail.com"
  }
];

export default function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Settings" />
      <SettingsTable  data={data} />
    </div>
  );
}
