"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ProductImage = ({ product }) => {
    const [activeImage, setActiveImage] = useState("index-0");
    const container = useRef();

    const previousHandler = () => {
        const current = document.querySelector(".carousel-images :not(.hidden-c)");
        const allImages = [...document.querySelector(".carousel-images").children];

        if (current.previousElementSibling) {
            allImages.forEach(img => img.classList.add("hidden-c"));
            current.previousElementSibling.classList.remove("hidden-c");
            setActiveImage(current.previousElementSibling.dataset.index);
            if (container.current.scrollLeft > 0) {
                scrollIt("l");
            }
        }
    }
    const nextHandler = () => {
        const current = document.querySelector(".carousel-images :not(.hidden-c)");
        const allImages = [...document.querySelector(".carousel-images").children];
        if (current.nextElementSibling) {
            allImages.forEach(img => img.classList.add("hidden-c"));
            current.nextElementSibling.classList.remove("hidden-c");
            setActiveImage(current.nextElementSibling.dataset.index);

            var finalP = container.current.scrollWidth - container.current.clientWidth;
            if (container.current.scrollLeft < finalP) {
                scrollIt("r");
            }
        }
    }
    const showCurrentImage = ({target})=> {
        var { index } = target.dataset;
        var current = document.querySelector(`.carousel-images [data-index="${index}"]`);
        const allImages = [...document.querySelector(".carousel-images").children];
        allImages.forEach(img => img.classList.add("hidden-c"));
        current.classList.remove("hidden-c");
        setActiveImage(index);
        
    }
    const scrollIt = (dir) => {
        var walk = 0;
        var breakP = 250;
        var time = setInterval(() => {
            if (walk <= breakP) {
                if (dir === 'l') {
                    container.current.scrollLeft -= 5;
                } else if (dir === "r") {
                    container.current.scrollLeft += 5
                } else {
                    throw Error("Should be 'l' or 'r' and not '" + dir + "'");
                }
                walk += 5;
            } else {
                clearInterval(time);
            }
        }, 1)
    }

    useEffect(() => {
        [...document.querySelector(".images-view").children].forEach(e => {
            if (e.dataset.index === activeImage) e.classList.add("border-slate-500");
            else e.classList.remove("border-slate-500");
        })
    }, [activeImage])
    return (
        <>
            <div className="h-fit p-4 rounded-md md:border">
                <div className="relative">
                    <button
                        className="bg-slate-300 rounded-full p-3 absolute left-0 top-1/2 opacity-40 hover:opacity-90"
                        onClick={previousHandler}
                        style={{ transform: "translateY(-50%)" }}

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                    </button>
                    <button
                        className="bg-slate-300 rounded-full p-3 absolute right-0 center-y opacity-40 hover:opacity-90 top-1/2"
                        onClick={nextHandler}
                        style={{ transform: "translateY(-50%)" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </button>
                    <div className="carousel-images">
                        {
                            product.images.map((img, i) => (
                                <Image
                                    key={"img-" + i}
                                    src={img}
                                    alt={product.title}
                                    width="0"
                                    height="0"
                                    data-index={"index-" + i}
                                    className={`w-full h-full md:object-contain md:max-h-80 ${i === 0 ? "" : "hidden-c"}`}
                                    unoptimized={true}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div 
                className="images-view mt-3 flex flex-nowrap items-center gap-x-4 overflow-hidden overflow-x-scroll no-scroll"
                ref={container}
            >
                {
                    product.images.map((img, i) => (
                        <Image
                            key={"img-" + i}
                            src={img}
                            alt={product.title}
                            width="0"
                            height="0"
                            data-index={"index-" + i}
                            className={`rounded-lg p-2 border w-32 h-32 md:object-contain md:max-h-80 cursor-pointer`}
                            unoptimized={true}
                            onClick={showCurrentImage}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default ProductImage;