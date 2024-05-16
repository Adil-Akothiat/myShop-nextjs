import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import ScrollAnimation from "@/aos/init";


const Card = ({ e }) => {
    return (
        <ScrollAnimation animation={"fade-up"} duration={"2000"}>
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <span className="text-slate-700 text-5xl">
                {
                    e.feature == "Free Shipping" ? <FaShippingFast /> :
                        e.feature == "Security Payment" ? <MdOutlineSecurity /> :
                            e.feature == "30 Day Return" ? <TbTruckReturn /> :
                                e.feature == "24/7 Support" ? <MdOutlineSupportAgent /> : null
                }
            </span>
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{e.feature}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{e.description}</p>
        </div>
        </ScrollAnimation>
    );
}

export default Card;