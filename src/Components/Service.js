import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const images = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    // Add more image filenames here...
];

const Service = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const sliderInterval = setInterval(nextImage, 3000); // Change image every 2 seconds
        return () => clearInterval(sliderInterval);
    }, [currentImageIndex]);

    return (
        <>
            <div className="h-[65em] md:h-[82em] lg:h-[54em]">
            < div className="flex justify-end  mt-[1em] pr-[1em]">
                    <Link className="h-[3em] w-[6em] bg-black  hover:bg-neutral-600" to="/">
                        <button className="pl-[1.5em] pt-[0.6em] text-white ">
                            Home
                        </button>
                    </Link>
                </div>
                <div className=" pt-[15em]  lg:pt-[15em] grid place-items-center ">
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className={`absolute top-[5em]   lg:top-[5em] flex justify-center
                        w-[20em] h-[20em] transition-opacity shadow-lg duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-1'
                                }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                        />
                    ))}
                    <div className="flex justify-center mt-[7em]">
                        <button
                            onClick={prevImage}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded shadow-lg"
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextImage}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
                        >
                            Next
                        </button>
                    </div>
                    <div className="grid place-items-center mt-[5em]">
                        <div>
                            <h1 className="font-bold shadow-lg">SERVICE</h1>
                        </div>
                        <div className="space-y-[1em] ">
                            <p >Travel management</p>
                            <p>passanger assistance</p>
                            <p>consulting</p>
                            <p>technology</p>
                        </div>
                        
                        <div className="mt-[2em] pt-[2.8em] h-[8em] bg-neutral-800 text-center lg:pt-[4em]">
                            <p className="text-blue-600" >@Ticket4u<span>2023</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Service;