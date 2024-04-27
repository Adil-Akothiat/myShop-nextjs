import React from "react";
// import UserBar from "./userBar";
import ShopCardBar from "./shopCartBar";
import SearchBar from "./searchBar";
import MenuBar from "./menu";

const Header = () => {
    return (
        <header className="navbar mb-12 border-b">
            <div className="navbar bg-base-100">
                <MenuBar />
                <div className="navbar-end">
                    <SearchBar />
                    <ShopCardBar />
                </div>
            </div>
        </header>
    );
}

export default Header;