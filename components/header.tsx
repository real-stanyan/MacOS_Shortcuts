"use client";

import * as React from "react";
import Image from "next/image";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsGithub } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

type SidebarProps = {
  onButtonClick: (buttonName: string) => void;
};

export function Header({ onButtonClick }: SidebarProps) {
  const { setTheme } = useTheme();
  const [position, setPosition] = React.useState("Home");

  return (
    <div className="flex p-3 border-b justify-between border-gray-500 w-100 h-[60px]">
      {/* header left part */}
      <div className="flex items-center">
        <Image
          src={"/macscripts.png"}
          alt="MacScript ICON"
          width={50}
          height={50}
          className="w-6 h-6 md:w-10 md:h-10"
        />
        <h1 className="font-mono text-l ml-2 md:text-3xl">MacScripts</h1>
      </div>
      {/* header right part :Desktops*/}
      <div className="hidden items-center md:flex">
        <Button
          variant="outline"
          className="p-2 mr-1"
          size="icon"
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
      {/* header right part :Mobles */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              {/* Mobile Header Menu */}
              <BiMenu size="20" />
            </Button>
          </DropdownMenuTrigger>
          {/* Dropmenu */}
          <DropdownMenuContent className="w-56">
            <div className="w-full flex justify-evenly m-1">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  onButtonClick("Home");
                }}
              >
                <AiOutlineHome size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                // onClick={() => {
                //   window.open(
                //     "https://github.com/real-StanYan/MacOS_Shortcuts"
                //   );
                // }}
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
            {/* Basic */}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Basic</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem
                value="Check&Kill Port Content"
                onClick={() => onButtonClick("Check&Kill Port Content")}
              >
                Check&Kill Port
              </DropdownMenuRadioItem>
              {/* Developer */}
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Developer</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioItem
                value="Front-end Frameworks initialize"
                onClick={() => onButtonClick("Front-end Frameworks initialize")}
              >
                Front-end Frameworks initialize
              </DropdownMenuRadioItem>
              {/* Computer Vision */}
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Computer Vision</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
