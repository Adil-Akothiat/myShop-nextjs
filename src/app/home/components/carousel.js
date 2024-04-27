"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CarouselLayout = ({ products }) => {
    var top5 = products.slice(10, 15);
    const [mouseOn, setMouseOn] = useState(false);

    useEffect(()=> {
        var time = setInterval(()=> {
            const currentElement = document.querySelector(".show");
            const carousel = document.getElementById("crs");
            carousel.addEventListener("mouseover", ()=> setMouseOn(true));
            carousel.addEventListener("mouseleave", ()=> setMouseOn(false));
            if(!mouseOn) {
                if(currentElement.nextElementSibling) {
                    currentElement.classList.remove("show");
                    currentElement.nextElementSibling.classList.add("show");
                }else {
                    currentElement.classList.remove("show");
                    carousel.children[0].classList.add("show");
                }
            }
        }, 2500)
        return ()=> {
            clearInterval(time);
        }
    }, [mouseOn])

    return (
        <div className="rounded-b-lg md:rounded-none md:rounded-r-lg w-full p-5 custom-carousel bg-white" id="crs">
            {
                top5.map(({image, title, price}, i)=> {
                    return (
                        <Link 
                            key={"crs-"+i}
                            href="/products" 
                            className={i===0 ? "show" : ""}
                        >
                            <img src={image} alt={title} className="mix-blend-multiply"/>
                            <span className="price bg-yellow-200 text-stone-800 font-bold p-4 rounded-full text-xs"><strong className="text-xl">{String(price).split(".")[0]}</strong>,{String(price).split(".")[1] === undefined ? "00" : String(price).split(".")[1]} USD</span>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default CarouselLayout;