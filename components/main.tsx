import Image from "next/image"


// const ImageLoader = () => {
//     return 
// }

const MainHome = () => {
    return(
        <main className="h-screen w-screen flex justify-center items-center flex-col">
                <h1 className="group text-xl md:text-3xl lg:text-6xl">
                    Rubén Alejandro Moncada Gómez
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white"></span>
                </h1>
                <section className="pt-20 flex gap-30 w-3/4 justify-evenly text-md md:text-xl lg:text-3xl">
                    <div className="cursor-pointer">Github</div>
                    <div className="cursor-pointer">Email</div>
                    <div className="cursor-pointer">CV</div>
                </section>
        </main>
    )
}

export default MainHome