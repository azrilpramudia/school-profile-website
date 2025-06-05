import React from "react";
import { useState } from "react";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState("#home")


    const navLinks = [
        {href: "#home", label: "Home"},
        {href: "#about", label: "About Us"},
        {href: "#academics", label: "Academics"},
        {href: "#news", label: "News"},
        {href: "#admission", label: "Admission"},
        {href: "#contact", label: "Contact"},
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
            <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
                {/* Logo */}
                <div className="flex items-center gap-1 curson-pointer">
                    <div className="w-4 h-4 bg-green-700 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {
                        navLinks.map((link, index) => (
                            <a key={index} href={link.href}
                            onClick={()=> setActiveLink(link.href)}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full":"text-gray-600"}`}>
                                {link.label}
                            </a>
                        ))
                    }
                </div>

                {/*  Get In Touch */}
                <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100 ">
                    <a href="#formDaftar">Get In Touch</a>
                </button>






            </div>
        </nav>
    )

}


export default Navbar