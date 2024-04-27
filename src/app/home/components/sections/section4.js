import Link from "next/link";
import React from "react";

const Section4 = ({ products })=> {
    var red = 0.25;
    var product = products.filter(p=> p.price === (Math.max(...products.map(p=> p.price))))[0];
    return (
        <section className="grid grid-cols-1 gap-y-8">
            <h3 className="text-2xl font-bold text-slate-700 pl-3 after relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-slate-700">Deal of The Day</h3>
            <div className="bg-white box-sh grid md:grid-cols-2 p-8 lg:p-12 gap-x-4 rounded-lg">
                <div className="md:pt-10 order-2 md:order-none">
                    <h5 className="text-sm text-slate-600">{product.title}</h5>
                    <div className="text-3xl font-bold mt-2">
                    <h6>Samsung 49-Inch TV</h6>
                    <h6>Don't miss the chance!</h6>
                    </div>
                    <div className="mt-5">
                        <p>
                        Last call for up to <strong className="text-2xl">{red * 100}%</strong> off!
                        </p>
                    </div>
                    <div className="mt-8">
                        <Link href="#shop" className="btn btn-outline btn-neutral">
                                Buy Now!
                        </Link>
                    </div>
                </div>
                <div className="mb-8 md:mb-0">
                    <img src={product.image} alt={product.title}/>
                </div>
            </div>
        </section>
    );
}

export default Section4;