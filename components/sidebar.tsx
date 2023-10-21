"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { AiOutlineHome } from "react-icons/ai";
import { BsUiChecksGrid } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";

type SidebarProps = {
  onButtonClick: (buttonName: string) => void;
};

export function Sidebar({ onButtonClick }: SidebarProps) {
  const [select, setSelect] = useState("Home");
  return (
    <div className="pb-12 border-r border-gray-500 max-w-xs h-100 hidden text-left md:block">
      <ScrollArea className="h-[100vh] px-1 space-y-4 py-4">
        <div className="space-y-1">
          <Button
            variant={select === "Home" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              onButtonClick("Home");
              setSelect("Home");
            }}
          >
            <AiOutlineHome className="mr-2 h-4 w-4" />
            Home
          </Button>
        </div>
        {/* Basic Scripts */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Basic
          </h2>
          <div className="space-y-1">
            <Button
              variant={
                select === "Check&Kill Port Content" ? "secondary" : "ghost"
              }
              className="w-full justify-start"
              onClick={() => {
                onButtonClick("Check&Kill Port Content");
                setSelect("Check&Kill Port Content");
              }}
            >
              <BsUiChecksGrid className="mr-2 h-4 w-4" />
              Check&Kill Port
            </Button>
          </div>
        </div>
        {/* Developer Script */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Developer
          </h2>
          <div className="space-y-1">
            <Button
              variant={
                select === "Front-end Frameworks initialize"
                  ? "secondary"
                  : "ghost"
              }
              className="w-full justify-start"
              onClick={() => {
                onButtonClick("Front-end Frameworks initialize");
                setSelect("Front-end Frameworks initialize");
              }}
            >
              <LiaToolsSolid className="mr-2 h-4 w-4" />
              <p className="whitespace-nowrap">
                Front-end Frameworks initialize
              </p>
            </Button>
          </div>
        </div>
        {/* Computer Script */}
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Computer Vision
          </h2>
          <div className="space-y-1 p-2"></div>
        </div>
      </ScrollArea>
    </div>
  );
}
