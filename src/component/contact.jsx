import React from "react";

const Contact = () => {
    return(
        <section id="contact" className="py-20 bg-linear-to-b from-sky-700 to-sky-950">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl mb-4 text-white">Contact Me</h2>
                <p className="text-xl mb-4 text-white"> Feel free to leave me a message ^^</p>
                <a href="mailto:halenaazaliamirabelfirdiyanto@gmail.com" className="bg-sky-950 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full shadow-gray-400 shadow-sm transition duration-300">Send Mail</a>

            </div>
        </section>
    )
}

export default Contact;