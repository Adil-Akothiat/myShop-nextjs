"use client";
import React, { useRef, useState } from "react";
import "../header.css";
import SearchResult from "./searchResult";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ products }) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const inputSearch = useRef();
    const openSearch = ()=> {
        setSearchOpen(true);
        inputSearch.current.focus();
    };
    const closeSearch = ()=> {
        setSearchOpen(false);
        setSearchInput("");
    };

    return (
        <div className="dropdown dropdown-end">
            <div className={`bg-over fixed left-0 top-0 h-full w-full bg-black opacity-60 ${searchOpen ? "" : "hidden"}`} onClick={closeSearch}></div>
            <button className="btn btn-ghost btn-circle text-xl text-slate-600" onClick={openSearch}>
                <IoIosSearch />
            </button>
            <div className={`search-box fixed left-0 top-0 w-full h-36 duration-500 ${searchOpen ? "openit": ""}`}>
                <form className="absolute left-1/2 top-1/2 flex mt-3" onSubmit={(e)=> e.preventDefault()}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search in the store" value={searchInput} onChange={({target})=> setSearchInput(target.value)} ref={inputSearch}/>
                        <IoIosSearch />
                    </label>
                    <button className="btn btn-ghost btn-circle ml-0 md:ml-3 text-xl text-slate-600" onClick={closeSearch}>
                        <IoMdClose />
                    </button>
                </form>
            </div>
            {
                searchOpen ? (<SearchResult 
                    searchInput={searchInput}
                    products={products}
                    closeSearch={closeSearch}
                />):null
            }
        </div>
    );
}

export default SearchBar;