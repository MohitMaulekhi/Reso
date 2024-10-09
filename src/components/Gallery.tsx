import React from 'react'
import Image from 'next/image'
import GalleryMoon from "../../public/static/images/GalleryMoon.png"
function Gallery() {
    return (
        <>
            <div className='absolute'>
                <span className='galleryText text-[23.5vw] text-center tracking-wide  font-semibold'>GALLERY</span>
            </div>

            <div className='bg-black text-white md:h-[100vh] h-[50vh] gallery bg-contain flex flex-col items-center justify-center'>

                <div className='text-white text-4xl text-center font-semibold'>
                    OUR GALLERY
                </div>
                
                <button className='bg-[#DCDCDC] py-1 px-10 text-black rounded-3xl font-semibold'>
                    EVENT NAME
                </button>
            </div>
        </>
    )
}

export default Gallery