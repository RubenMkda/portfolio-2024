import MainHome from "@/components/main";
import UseCustomCursor from "@/components/poinert";
import CursorTracker from "@/components/poinert";
import Proyectos from "@/components/proyectos";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main id="wrapper">
       <UseCustomCursor />
       <MainHome />
       <Proyectos />
    </main>
  );
}
