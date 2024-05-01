"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const ScrollAnimation = ({ animation, children, duration })=> {
    useEffect(()=> {
        Aos.init();
    }, [])
    return (
        <div data-aos={animation} data-aos-duration={duration}>
            {
                children
            }
        </div>
    );
}

export default ScrollAnimation;