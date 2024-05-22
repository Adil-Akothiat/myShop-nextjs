"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import contactUsImg from "./image/contact_us.jpg";
import "../products/components/productCard/card.css";
import ScrollAnimation from "@/aos/init";

const Contact = () => {
    useEffect(()=> window.scrollTo(0, 0), []);
    return (
        <ScrollAnimation animation={"fade-up"} duration={"2000"}>
            <div className="grid md:grid-cols-2 gap-x-2 lg:gap-x-10 gap-y-5 my-10 px-4 md:px-10 lg:px-16 xl:px-24">
                <div className="rounded-md lg:max-h-96 custom-shadow">
                    <Image
                        unoptimized
                        src={contactUsImg}
                        alt="contact us"
                        width="0"
                        height="0"
                        className="w-full h-full object-contain"
                    />
                </div>
                <form className="grid grid-cols-1 gap-4 custom-shadow rounded-md p-5">
                    <div>
                        <label htmlFor="subject" className="block leading-loose">Subject</label>
                        <input type="text" name="subject" id="subject" className="input input-bordered w-full rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block leading-loose">Email</label>
                        <input type="email" name="email" id="email" className="input input-bordered w-full rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block leading-loose">Message</label>
                        <textarea name="message" id="message" className="input input-bordered w-full rounded-md min-h-32 max-h-32"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-neutral">Send</button>
                    </div>
                </form>
            </div>
        </ScrollAnimation>
    );
}

export default Contact;