"use client";

import * as React from "react";
import Image from "next/image";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsGithub } from "react-icons/bs";

export function Header() {
  const { setTheme } = useTheme();

  return (
    <div className="flex p-3 border-b justify-between border-gray-500 w-100 max-h-72">
      {/* header left part */}
      <div className="flex items-center">
        <Image
          src={"/macscripts.png"}
          alt="MacScript ICON"
          width={50}
          height={50}
        />
        <h1 className="font-mono text-3xl ml-2">MacScripts</h1>
      </div>
      {/* header right part */}
      <div className="flex items-center">
        <Button
          variant="outline"
          className="p-2 mr-1"
          onClick={() => {
            window.open("https://github.com/real-StanYan/MacOS_Shortcuts");
          }}
        >
          <BsGithub size={20} />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
