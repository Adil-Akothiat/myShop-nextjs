"use client";
import React, { useRef, useState } from "react";
import "../header.css";
import SearchResult from "./searchResult";

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
            <button className="btn btn-ghost btn-circle" onClick={openSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <div className={`search-box fixed left-0 top-0 w-full h-36 duration-500 ${searchOpen ? "openit": ""}`}>
                <form className="absolute left-1/2 top-1/2 flex mt-3" onSubmit={(e)=> e.preventDefault()}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search in the store" value={searchInput} onChange={({target})=> setSearchInput(target.value)} ref={inputSearch}/>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <button className="btn btn-ghost btn-circle ml-0 md:ml-3" onClick={closeSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
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