import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-sky-950 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-3xl font-bold">Halena Firdiy</h1>
                <div>
                    <a href="#about" className="text-gray-300 hover:text-white mx-4 transition duration-300">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white mx-4 transition duration-300">Project</a>
                    <a href="#contact" className="text-gray-300 hover:text-white mx-4 transition duration-300">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar