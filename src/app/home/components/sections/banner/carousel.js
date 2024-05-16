"use client";
import React from "react";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const CarouselLayout = () => {
    return (
        <>
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
                    [1, 2, 3].map(n => (
                        <div key={"kwy-" + n} className="h-56 md:h-full  lg:h-xl">
                            <Image
                                src={require("../../images/banner"+n+".jpg")}
                                alt={"banner "+n}
                                width="0"
                                height="0"
                                className="w-full h-full object-cover"
                                unoptimized={true}
                            />
                        </div>
                    ))
                }
            </Carousel>
        </>
    );
}

export default CarouselLayout;