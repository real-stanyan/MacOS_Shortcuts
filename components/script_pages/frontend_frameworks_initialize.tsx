"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FrontendFrameworksInitialize() {
  const [terminal, setTerminal] = useState("iterm");

  const handleDownload = (version: string) => {
    const link = document.createElement("a");
    link.href =
      version === "terminal"
        ? "/scripts/FrontEnd_Initialize/FrontEnd_Initialize_terminal.applescript"
        : "/scripts/FrontEnd_Initialize/FrontEnd_Initialize_iterm.applescript";
    link.download = "FrontEnd_Initialize.applescript"; // 提议的文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="font-bold text-2xl antialiased italic text-center my-4 md:text-5xl">
        Front-end Frameworks initialize
      </h1>
      <Tabs defaultValue="default" className="w-[60vw] flex flex-col">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="default">Default</TabsTrigger>
          <TabsTrigger value="customize">Customize</TabsTrigger>
        </TabsList>
        {/* Default */}
        <TabsContent value="default" className="flex flex-col">
          <p className="my-2 text-center">
            * By default, the terminal will be used as the shell runner.
          </p>
          <video className="custom-video" width="960" height="720" controls>
            <source src="/videos/FrontEnd_Initialize.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="my-2 text-center">support frameworks</p>
          <div className="flex justify-evenly">
            <Image
              src={"/next_icon.png"}
              alt="Nextjs_icon"
              width={100}
              height={100}
              className="w-[10vw] h-[10vw]"
            />
            <Image
              src={"/react_icon.png"}
              alt="Reactjs_icon"
              width={100}
              height={100}
              className="w-[10vw] h-[10vw]"
            />
            <Image
              src={"/vue_icon.png"}
              alt="Vuejs_icon"
              width={100}
              height={100}
              className="w-[10vw] h-[10vw]"
            />
            <Image
              src={"/vite_icon.png"}
              alt="Vitejs_icon"
              width={100}
              height={100}
              className="w-[10vw] h-[10vw]"
            />
          </div>
          <Button
            variant="outline"
            size="lg"
            className="my-3"
            onClick={() => {
              handleDownload("terminal");
            }}
          >
            download script
          </Button>
        </TabsContent>
        {/* Customize */}
        <TabsContent value="customize">
          <p className="my-2 text-center text-lg">
            Choose the Terminal tool you use:
          </p>
          <RadioGroup
            defaultValue={terminal}
            className="grid grid-cols-2 gap-4"
          >
            <div
              onClick={() => {
                setTerminal("iterm");
              }}
            >
              <RadioGroupItem
                value="iterm"
                id="iterm"
                className="peer sr-only"
              />
              <Label
                htmlFor="iterm"
                className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Image
                  src={"/iterm.png"}
                  alt="iTerm"
                  width={100}
                  height={100}
                />
                iTerm
              </Label>
            </div>
            <div
              onClick={() => {
                setTerminal("terminal");
              }}
            >
              <RadioGroupItem
                value="terminal"
                id="terminal"
                className="peer sr-only"
              />
              <Label
                htmlFor="terminal"
                className="h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Image
                  src={"/terminal.png"}
                  alt="Terminal"
                  width={100}
                  height={100}
                />
                Terminal
              </Label>
            </div>
          </RadioGroup>
          <Button
            variant="outline"
            size="lg"
            className="w-full my-3"
            onClick={() => {
              handleDownload(terminal);
            }}
          >
            download script
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}
