import Proyectos from "@/components/proyectos";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
       <Proyectos />
    </main>
  );
}
