import React from "react";
import CarouselLayout from "../carousel";
import Link from "next/link";

const Section1 = ({ products }) => {
    return (
        <section>
            <div className="grid md:grid-cols-2">
                <div className="border text-center bg-slate-700 text-white uppercase p-5 relative h-80 md:h-full rounded-t-lg md:rounded-none md:rounded-l-lg">
                    <div className="absolute top-1/2 left-1/2 w-4/5 grid grid-cols-1 gap-y-9" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="md:text-6xl">
                            <h4 className="font-bold mb-2">best quality</h4>
                            <h4 className="font-bold">Best price</h4>
                        </div>
                        <div>
                            <Link type="button" href="#buynow" className="bg-white text-slate-700 uppercase rounded-full px-5 py-3 border border-white hover:bg-slate-700 hover:text-white">buy now!</Link>
                        </div>
                    </div>
                </div>
                <CarouselLayout products={products} />
            </div>
        </section>
    );
}

export default Section1;