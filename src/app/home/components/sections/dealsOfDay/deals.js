import Link from "next/link";
import React from "react";
import Image from "next/image";
import ScrollAnimation from "@/aos/init";
import DealCard from "./dealCard";

const Deals = ({ products }) => {
    var product = products.filter(p=> p.discountPercentage === Math.max(...products.map(({discountPercentage})=> discountPercentage)))[0];
    return (
        <ScrollAnimation animation={"fade-up"} duration={"2000"}>
        <section className="grid grid-cols-1 gap-y-8 px-4 md:px-10 lg:px-16 xl:px-24">
            <DealCard product={product}/>
        </section>
        </ScrollAnimation>
    );
}

export default Deals;