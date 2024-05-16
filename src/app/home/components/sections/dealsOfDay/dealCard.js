import React from "react";
// import CarouselLayout from "../banner/carousel";
import { Carousel, IconButton } from "@material-tailwind/react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const DealCard = ({ product }) => {

    return (
        <div class="container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 items-center">
            <div>
                <Carousel
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 -translate-y-2/4 z-[10]"
                        >
                            <GrFormPreviousLink className="text-3xl" />
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-4 -translate-y-2/4 z-[10]"
                        >
                            <GrFormNextLink className="text-3xl" />
                        </IconButton>
                    )}
                >
                    {
                        product?.images.map((src, i) => (
                            <div key={"kwy-" + i} className="h-56 md:h-full  lg:h-xl">
                                <Image
                                    src={src}
                                    alt={product?.title}
                                    width="0"
                                    height="0"
                                    className="w-80 h-80 object-cover mx-auto"
                                    unoptimized={true}
                                />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div>
                <div className="text-3xl font-bold mb-4">Special Offer!</div>
                <div className="text-lg mb-4 xl:text-2xl">Get <span className="text-yellow-400 font-bold xl:text-3xl">{product?.discountPercentage}% OFF</span></div>
                <div className="text-base mb-4">{product?.title}</div>
                <div className="text-sm mt-4">
                    <p>
                        {product?.description}
                    </p>
                </div>
                <div className="mt-5">
                    <Link href={"/products/"+product?.title} className="inline-flex overflow-hidden text-white bg-gray-900 rounded group hover:bg-slate-700">
                        <span className="px-3.5 py-2 text-white bg-slate-700 flex items-center justify-center">
                            <FaCartShopping />
                        </span>
                        <span className="pl-4 pr-5 py-2.5">Add to Cart</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DealCard;