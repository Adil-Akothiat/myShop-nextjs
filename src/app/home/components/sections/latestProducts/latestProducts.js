"use client";
import React, { useRef } from "react";
import "../../../../products/components/productCard/card.css";
import ScrollAnimation from "@/aos/init";
import NewCard from "./newCard";

const LatestProducts = ({ products }) => {
    const container = useRef(null);
    products = products.slice(0, 10);

    const scrollLeftHandler = () => {
        if (container.current.scrollLeft > 0) {
            scrollIt("l");
        }
    }
    const scrollRightHandler = () => {
        var finalP = container.current.scrollWidth - container.current.clientWidth;
        if (container.current.scrollLeft < finalP) {
            scrollIt("r");
        }
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
        }, 7.5)
    }

    return (
        <ScrollAnimation animation={"fade-up"} duration={"2000"}>
            <section className="items-center md-gap-5 w-full px-4 md:px-10 lg:px-16 xl:px-24">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-slate-700 pl-3 after relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-slate-700">Latest Products</h3>
                    <div className="grid grid-cols-2 gap-x-3">
                        <button
                            className="btn btn-gosht rounded-full"
                            onClick={scrollLeftHandler}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                        </button>
                        <button
                            className="btn btn-gosht rounded-full"
                            onClick={scrollRightHandler}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                        </button>
                    </div>
                </div>
                <div
                    className="flex flex-row flex-nowrap cust-scroll overflow-x-auto overflow-y-hidden items-stretch gap-x-6 smooth-scroll p-3"
                    ref={container}
                >
                    {
                        products.map((p, i)=> <NewCard key={"prd-"+i} product={p} />)
                    }
                </div>
            </section>
        </ScrollAnimation>
    );
}

export default LatestProducts;