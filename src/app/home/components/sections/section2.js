"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../../products/productCard/card.css";

const Section2 = ({ products }) => {
    const container = useRef(null);

    const scrollLeftHandler = ()=> {
        if(container.current.scrollLeft > 0) {
            scrollIt("l");
        }
    }
    const scrollRightHandler = ()=> {
        var finalP = container.current.scrollWidth - container.current.clientWidth;
        if(container.current.scrollLeft < finalP) {
            scrollIt("r");
        }
    }
    const scrollIt = (dir)=> {
        var walk = 0;
        var breakP = 250;
        var time = setInterval(()=> {
            if(walk <= breakP) {
                if(dir === 'l') {
                    container.current.scrollLeft -= 5;
                } else if (dir === "r") {
                    container.current.scrollLeft += 5
                } else {
                    throw Error("Should be 'l' or 'r' and not '"+dir+"'");
                }
                walk += 5;
            } else {
                clearInterval(time);
            }
        }, 1)
    }

    return (
        <section className="items-center md-gap-5 w-full relative">
            <button 
                className="bg-slate-300 rounded-full p-3 absolute left-0 center-y opacity-40 hover:opacity-90"
                onClick={scrollLeftHandler}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
            </button>
            <button 
                className="bg-slate-300 rounded-full p-3 absolute right-0 center-y opacity-40 hover:opacity-90"
                onClick={scrollRightHandler}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
            </button>
            <div
                className="flex flex-row flex-nowrap cust-scroll overflow-x-auto overflow-y-hidden items-stretch gap-x-6 smooth-scroll p-3"
                ref={container}
            >
                {
                    products.map(({ image, title }, i) => {
                        return (
                            <div
                                className="min-w-64 max-h-64 mb-5 overflow-hidden bg-white custom-shadow rounded-lg"
                                key={"prd-" + i}
                            >
                                <div className="p-2">
                                    <Link href="#buy" className="select-none">
                                        <Image 
                                            src={image} 
                                            alt={title}
                                            width="0"
                                            height="0"
                                            className="object-contain w-96 h-40 select-none" 
                                        />
                                    </Link>
                                </div>
                                <div className="px-4">
                                    <h2 className="card-title mt-3 pb-3" title={title}>
                                        <Link href="#buy" className="text-sm hover:text-slate-500 select-none">
                                            {
                                                title.substr(0, 30).length === title.length ? title :
                                                    title.substr(0, 30) + "..."
                                            }
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Section2;