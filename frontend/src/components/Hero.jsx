import React from "react";
import heroImage from "../assets/child1.jpg"



const Hero = () => {
    return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">
        {/*left col*/}
        <div className="w-full md:w-1/2 space-y-8">
            <h1> 
                SLB Hasrat Mulia II
            </h1>
        </div>

        <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
            <div className="relative">
                <img src={heroImage} alt="hero image"/>
            </div>
        </div>
    </section>
    )
}



export default Hero