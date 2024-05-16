import ScrollAnimation from "@/aos/init";
import React from "react";
import Marquee from "react-fast-marquee";

const OurBrands = ({ products }) => {
    return (
        <ScrollAnimation animation={"fade-up"} duration={"2000"}>
            <section className="grid grid-cols-1 gap-y-8 px-4 md:px-10 lg:px-16 xl:px-24">
                <Marquee>
                    {
                        products.map((p, i) => (
                            <h3 key={"kwt-" + i} className="p-5 bg-slate-100 text-slate-800 text-xl font-bold mx-3 px-2.5 py-0.5 rounded text-capitalize">{p.brand}</h3>
                        ))
                    }
                </Marquee>
            </section>
        </ScrollAnimation>
    );
}

export default OurBrands;