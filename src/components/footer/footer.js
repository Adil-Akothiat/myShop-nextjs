"use client";
import React from "react";
import Link from "next/link";
import "../../app/products/components/productCard/card.css";

const Footer = () => {
    return (
        <footer className="bg-white mt-12 border-t pt-4">
            <div className="text-center mb-5">
                <Link href="/" className="block text-xl">MyShop</Link>
            </div>
            <ul className="text-center flex flex-wrap w-fit mx-auto">
                <li className="hover:text-slate-700 mr-3">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-slate-700 mr-3">
                    <Link href="/products">Products</Link>
                </li>
                <li className="hover:text-slate-700 mr-3">
                    <Link href="#promotions">Promotions</Link>
                </li>
                <li className="hover:text-slate-700 mr-3">
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
            <div className="text-slate-700 text-center mt-4">
                &copy;{new Date().getFullYear()} MyShop. All rights reserved.
            </div>
            <button 
                className="btn btn-gosht btn-circle fixed bottom-10 right-14 z-[200] opacity-50 hover:opacity-90"
                onClick={()=> window.scrollTo(0, 0)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>
            </button>
        </footer>
    );
}

export default Footer;