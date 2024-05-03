"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CarouselLayout = ({ products }) => {
    products = products.slice(8, 14);
    const [mouseOn, setMouseOn] = useState(false);
    const priceAfterDiscount = (price, discount)=> (price - ((price * discount) / 100)).toFixed(2);

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
        <div className="rounded-t-lg md:rounded-none md:rounded-r-lg w-full p-5 custom-carousel bg-white" id="crs">
            {
                products.map(({thumbnail, title, price, discountPercentage}, i)=> {
                    return (
                        <Link 
                            key={"crs-"+i}
                            href={"/products/"+title} 
                            className={i===0 ? "show" : ""}
                        >
                            <Image  
                                src={thumbnail}
                                width="0"
                                height="0"
                                alt={title}
                                className="w-full h-full scale-95 hover:scale-100 duration-500"
                            />
                            {/* <span className="price bg-yellow-200 text-stone-800 font-bold p-4 rounded-full text-xs">{priceAfterDiscount(price, discountPercentage)} USD</span> */}
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default CarouselLayout;