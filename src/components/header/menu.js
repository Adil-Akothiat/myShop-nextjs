"use client";
import Link from "next/link";
import React from "react";

const MenuBar = () => {
    return (
        <>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 p-2 z-20 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="#categories">Categories</Link>
                            <ul className="p-2">
                                <li>
                                    <Link href="#category1">Category1</Link>
                                </li>
                                <li>
                                    <Link href="#category2">Category2</Link>
                                </li>
                                <li>
                                    <Link href="#category3">Category3</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="text-xl">MyShop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-20">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                <li>
                                    <Link href="#category1">Category1</Link>
                                </li>
                                <li>
                                    <Link href="#category2">Category2</Link>
                                </li>
                                <li>
                                    <Link href="#category3">Category3</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MenuBar;