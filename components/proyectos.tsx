"use client"
import Image, { ImageLoader } from 'next/image';
import portfolioData from '../const/proyectos.json';

export interface ProyectosData {
    nombre: string;
    descripcion: string;
    tecnologias: string[];
    enlace?: string;
    imagen: string;
    isologo: string;
}

const Proyectos =() => {  

    return (
        <section className='grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2'>
            {portfolioData.proyectos.map((proyecto: ProyectosData, index: number) => (
                <div key={index} className='my-48 flex justify-center w-full'>
                        <div className="card">
                            <div className="wrapper border border-2 border-white">
                                <Image loader={() => {return proyecto.imagen}} src={"0.jpg"} className={"cover-image"} width={500} height={500} alt='hola'/>
                            </div>
                            <img src={proyecto.isologo} className="title" />
                            <p className='content'>Con entusiasmo, presento la página web de Fu Ibérica, líder en soluciones de transmisión. Diseñada meticulosamente, nuestra plataforma digital ofrece información detallada sobre nuestra gama de productos de alta calidad y servicios especializados. ¡Bienvenidos al mundo de la excelencia en transmisiones con Fu Ibérica!</p>
                        </div>
                </div>
            ))}
        </section>
    );
}

export default Proyectos