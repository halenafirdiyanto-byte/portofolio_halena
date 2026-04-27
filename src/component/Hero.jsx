import React from "react";
import cover from "../assets/foto_pramuka.jpeg";

const Hero = () => {
    return(
        <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage:`url(${cover})`}}>
            <div className="bg-black/50 h-full flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-5xl font-bold mb-4">Hello I'm Halena Azalia Mirabel Firdiyanto</h2>
                <p className="text-2xl mb-8">Software Engineering Student</p>
                <a href="#contact" className="bg-sky-950 hover:bg-sky-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300">
                    Contact
                </a>
            </div>

        </section>
    )
}

export default Hero