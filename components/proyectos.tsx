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
        <section className='grid grid-cols-1 gap-4 justify-items-center lg:grid-cols-2 py-8'>
            {portfolioData.proyectos.map((proyecto: ProyectosData, index: number) => (
                <div key={index} className='my-48 flex justify-center w-full'>
                        <div className="card">
                            <div className="wrapper border border-2 border-white">
                                <Image loader={() => {return proyecto.imagen}} src={"0.jpg"} className={"cover-image"} width={500} height={500} alt='hola'/>
                            </div>
                            <img src={proyecto.isologo} className="title" />
                            <p className='content text-xs md:text-sm lg:text-base'>{proyecto.descripcion}</p>
                        </div>
                </div>
            ))}
        </section>
    );
}

export default Proyectos