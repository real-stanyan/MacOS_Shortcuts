"use client";

import { useState } from "react";

import { Switcher } from "@/components/switcher";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export default function Home() {
  const [content, setContent] = useState("Home");

  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar onButtonClick={setContent} />
        <Switcher content={content} />
      </div>
    </main>
  );
}
