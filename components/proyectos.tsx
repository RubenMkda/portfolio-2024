"use client"
import Image, { ImageLoader } from 'next/image';
import portfolioData from '../const/proyectos.json';

export interface ProyectosData {
    nombre: string;
    descripcion: string;
    tecnologias: string[];
    enlace?: string;
    imagen: string;
}

const Proyectos =() => {  

    return (
        <section className='grid grid-cols-2 gap-4 justify-items-center'>
            {portfolioData.proyectos.map((proyecto: ProyectosData, index: number) => (
                <div key={index} className='my-32 flex justify-center'>
                        <div className="card">
                            <div className="wrapper border border-2 border-white">
                                <Image loader={() => {return proyecto.imagen}} src={"/0.jpg"} className={"cover-image"} width={300} height={300} alt='hola'/>
                            </div>
                            <img src="https://clesteticamasculinabarcelona.com/wp-content/uploads/2023/12/Isologo.webp" className="title" />
                        </div>
                </div>
            ))}
        </section>
    );
}

export default Proyectos