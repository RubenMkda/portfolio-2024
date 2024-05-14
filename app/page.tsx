import MainHome from "@/components/main";
import CanvasBackground from "@/components/poinert";
import Proyectos from "@/components/proyectos";

export default function Home() {
  return (
    <>
    <main id="wrapper">
       <CanvasBackground />
       <MainHome />
       <Proyectos />
    </main>
    </>
  );
}
