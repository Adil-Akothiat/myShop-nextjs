import React from "react";
import Link from "next/link";
import "../../app/products/productCard/card.css";

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
        </footer>
    );
}

export default Footer;