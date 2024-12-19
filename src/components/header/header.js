"use client";
import React from "react";
import ShopCardBar from "./shopCartBar";
import SearchBar from "./searchbar/searchBar";
import MenuBar from "./menu";
import "../../app/products/components/productCard/card.css";
import "../../app/products/components/productCard/card.css";
import store from "@/redux/cart/store";
import { Provider } from "react-redux";
import Link from "next/link";
import { GoPerson } from "react-icons/go";


const Header = ({ categories, products }) => {
    return (
        <Provider store={store}>
            <header className="navbar sticky top-0 z-[1000] bg-white border-b px-1 md:px-10 lg:px-16 xl:px-24">
                <div className="navbar">
                    <MenuBar categories={categories} />
                    <div className="navbar-end">
                        <Link href="/signin" className="btn btn-ghost btn-circle text-xl text-slate-600">
                            <GoPerson />
                        </Link>
                        <SearchBar
                            products={products}
                        />
                        <ShopCardBar />
                    </div>
                </div>
            </header>
        </Provider>
    );
}

export default Header;