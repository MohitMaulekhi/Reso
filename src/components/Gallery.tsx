'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import GalleryMoon from "../../public/static/images/GalleryMoon.png"
function Gallery() {
    let ImgArr = ["/static/images/galleryImage.png",
        "/static/images/AboutUsBG.png",
        "/static/images/galleryImage.png",
        "/static/images/AboutUsBG.png"
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(()=>{
        const handleNext = () => {
            setCurrentIndex((prevIndex) => {
                if(prevIndex+1 < ImgArr.length){
                    return prevIndex+1;
                }
                else{
                    return 0;
                }
            });
        }
        const interval = setInterval(handleNext,1000)
        return () => clearInterval(interval);
    },[])
    
    


        return (

            <>
                <div className='absolute'>
                    <span className='galleryText text-[23.5vw] text-center tracking-wide  font-semibold'>GALLERY</span>
                </div>

                <div className='bg-black text-white md:h-[100vh] sm:h-[85vh] h-[50vh] gallery bg-contain flex flex-col items-center justify-center overflow-clip'>

                    <div className='text-white text-4xl text-center font-semibold'>
                        OUR GALLERY
                    </div>
                    <div className='mb-7 flex flex-row justify-between items-center'>
                        <div style={{
                            backgroundImage:`url(${ImgArr[(currentIndex-1 < 0 ? ImgArr.length-1 : currentIndex-1 )]})`
                        }} className=' galImg h-[25vh] w-[50vw] md:w-[20vw] bg-cover bg-no-repeat min-h-64  md:h-[300px] rightImg transition-all ease-in-out delay-150 ' />
                        <div
                        style={{
                            backgroundImage:`url(${ImgArr[currentIndex]})`
                        }}
                            className='galImg h-[25vh] w-[50vw] bg-cover bg-no-repeat md:w-[30vw]  min-h-64  md:h-[500px] transition-all ease-in-out delay-150 ' />
                        <div
                        style={{
                            backgroundImage:`url(${ImgArr[currentIndex+1 >= ImgArr.length ? 0 : currentIndex+1 ]})`
                        }}
                         className='galImg h-[25vh] w-[50vw] bg-cover bg-no-repeat md:w-[30vw]  leftImg min-h-64  md:h-[300px] transition-all ease-in-out delay-150 ' />
                    </div>
                    <button className='bg-[#DCDCDC] py-1 px-10 text-black rounded-3xl font-semibold'>
                        EVENT NAME
                    </button>
                </div>
            </>
        )
    }

    export default Gallery