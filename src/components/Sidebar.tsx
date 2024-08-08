"use client";

import React , {useState} from "react";
import {
    ShoppingCart,
    LayoutDashboard,
    UsersRound,
    Settings,
    ChevronRight
  } from "lucide-react";
import { Nav } from "./ui/nav";
import { Button } from "./ui/button";
import {

    useWindowWidth,

  } from '@react-hook/window-size'


type Props = {};

function Sidebar({}: Props) {

    const onlyWidth = useWindowWidth();

    const mobileWidth = onlyWidth < 768


    const [isCollapsed , setIsCollapsed] = useState<boolean>(false)
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
        {!mobileWidth && <div className="absolute top-7 right-[-20px]">
        <Button variant={"secondary"}
        className="rounded-full p-2"
        onClick={() => setIsCollapsed(prev => !prev)}>
            <ChevronRight/>
        </Button>
        </div>}
      <Nav
    isCollapsed = { mobileWidth ? true : isCollapsed}
    links={[
        {
          title: "Dashboard",
          href: "/",
          icon: LayoutDashboard,
          variant: "default"
        },
        {
          title: "Users",
          href: "/users",
          icon: UsersRound,
          variant: "ghost"
        },
        {
          title: "Orders",
          href: "/orders",
          icon: ShoppingCart,
          variant: "ghost"
        },
        {
          title: "Settings",
          href: "/settings",
          icon: Settings,
          variant: "ghost"
        }
      ]}
      />
    </div>
  );
}

export default Sidebar;
