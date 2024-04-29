"use client";
import React, { useEffect, useState } from "react";
// import UserBar from "./userBar";
import ShopCardBar from "./shopCartBar";
import SearchBar from "./searchBar";
import MenuBar from "./menu";
import "../../app/products/components/productCard/card.css";
import "../../app/products/components/productCard/card.css";

const Header = ({ categories }) => {
    const [opacity, setOpacity] = useState("bg-white opacity-100");
    useEffect(()=>{
        window.onscroll = ()=> {
            if(window.scrollY > 10) {
                setOpacity("bg-slate-300 opacity-75")
            } else {
                setOpacity("bg-white opacity-100")
            }
        }
    },[])
    return (
        <header className={"navbar mb-12 sticky top-0 z-[1000] "+opacity}>
            <div className="navbar">
                <MenuBar categories={categories}/>
                <div className="navbar-end">
                    <SearchBar />
                    <ShopCardBar />
                </div>
            </div>
        </header>
    );
}

export default Header;