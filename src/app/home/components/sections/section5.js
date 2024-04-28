import React from "react";

const Section5 = () => {
    return (
        <section className="bg-slate-700 rounded-lg p-8 grid gap-y-5 lg:grid-cols-2 md:gap-y-none">
            <div className="text-white">
                <h6 className="text-2xl w-64 lg:text-4xl lg:w-96">
                    Subscribe for Latest Trends & Offers
                </h6>
            </div>
            <form className="block lg:flex lg:gap-x-4">
                <label className="input input-bordered flex items-center w-full gap-2 lg:w-2/3 mb-3 lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="w-full" placeholder="Email" />
                </label>
                <button type="submit" className="btn bg-white lg:w-1/3">Subscribe</button>
            </form>
        </section>
    );
}

export default Section5;