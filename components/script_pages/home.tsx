import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly items-center w-full h-full">
      <Image
        src={"/macscripts.png"}
        alt="MacScript ICON"
        width={400}
        height={400}
      />
      <h1 className="font-bold text-5xl antialiased italic">MacScripts</h1>
      <p>Still in early development version...</p>
    </div>
  );
}
