'use client'
import React from 'react'
import SpaceMan from "../../public/static/images/Spaceman.png"
import Image from 'next/image'
export default function About() {
    return (
        <>
            <div className='about flex flex-row'>
                
                <Image className='w-[30vw] scale-[250%] translate-x-[15vw] sm:translate-y-[15vw] translate-y-[6.5vh]' src={SpaceMan} alt='error' />
                <div className='float-right pr-4 '>
                    <h1 className='text-white md:text-4xl text-2xl text-right text'>
                        About Us
                    </h1>
                    <p className='text-white text-right text-[6px] md:text-lg'>
                        Design is more than visuals; it's a language that bridges functionality and user experience. As technology evolves, so does the demand for interfaces that are not only visually appealing but also intuitive and accessible. Good design prioritizes clarity, ensuring that every element has purpose, guiding users effortlessly toward their goals. It’s about understanding the user’s needs and aligning them with the project’s objectives. For those passionate about creating impactful digital experiences, design becomes a blend of art and empathy. Every pixel matters, and every choice reflects a commitment to making interactions smoother, leaving users satisfied and engaged with each visit
                    </p>
                </div>
            </div>
        </>
    )
}
