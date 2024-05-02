"use client";
import React, { useEffect, useState } from "react";
// import UserBar from "./userBar";
import ShopCardBar from "./shopCartBar";
import SearchBar from "./searchbar/searchBar";
import MenuBar from "./menu";
import "../../app/products/components/productCard/card.css";
import "../../app/products/components/productCard/card.css";
import store from "@/redux/cart/store";
import { Provider } from "react-redux";

const Header = ({ categories, products }) => {
    const [opacity, setOpacity] = useState("bg-opacity-100");
    useEffect(()=>{
        window.onscroll = ()=> {
            if(window.scrollY > 10) {
                setOpacity("bg-opacity-75");
            } else {
                setOpacity("bg-opacity-100");
            }
        }
    },[])
    return (
        <Provider store={store}>
            <header className={"navbar mb-12 sticky top-0 z-[1000] bg-white "+opacity}>
                <div className="navbar">
                    <MenuBar categories={categories}/>
                    <div className="navbar-end">
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