import React from "react";
// import UserBar from "./userBar";
import ShopCardBar from "./shopCartBar";
import SearchBar from "./searchBar";
import MenuBar from "./menu";
import "../../app/products/productCard/card.css";

const Header = ({ categories }) => {
    return (
        <header className="navbar mb-12 border-b">
            <div className="navbar bg-base-100">
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