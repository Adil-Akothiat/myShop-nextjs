"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SearchResult = ({ searchInput, products, closeSearch }) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (searchInput.length > 0) {
            setIsActive(true);
        } else {
            setIsActive(false);
            setResult([]);
        }
    }, [searchInput]);

    useEffect(() => {
        if (isActive) {
            setLoading(true);
            const myProducts = [];
            for (let product of products) {
                if (product.title.toLowerCase().includes(searchInput.toLowerCase()) || product.title.toLowerCase().startsWith(searchInput.toLowerCase())) {
                    myProducts.push(product)
                }
            }
            // wait 400ms
            setTimeout(()=> setLoading(false), 600);
            setResult(myProducts);
        } else {
            setResult([]);
        }
    }, [isActive, searchInput, products]);

    useEffect(() => {
        if (isActive) {
            if (result.length === 0) setNotFound(true)
            else setNotFound(false);
        }
    }, [isActive, result]);

    if (!isActive) return null;

    if (loading) {
        return (
            <div className="fixed left-0 top-36 w-full bg-white border-t z-[100]">
                <div className="w-4/5 mx-auto p-2">
                    <span className="block loading loading-spinner loading-md mx-auto"></span>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed left-0 top-36 w-full h-full bg-white z-[100]">
            <div className={`my-search-scroll grid grid-cols-2 absolute h-full w-4/5 mx-auto gap-4 md:grid-cols-3 mb-20 ${!notFound ? "overflow-y-scroll":""} left-1/2 p-4`} style={{transform:"translateX(-50%)"}}>
                {
                    notFound ? <p>Product not found!</p> :
                        result.map((p, i) => (
                            <Link 
                                href={"/products/" + p.title} key={"prd-" + i}
                                onClick={closeSearch}
                                className={i===result.length-1?"mb-64":""}
                            >
                                <div className="grid grid-cols-1 gap-y-3">
                                    <div className="border p-2 rounded-md">
                                        <Image
                                            src={p.thumbnail}
                                            alt={p.title}
                                            width="0"
                                            height="0"
                                            className="w-4/5 h-32 object-contain mx-auto"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="">{p.title}</h4>
                                        <h5 className="font-bold">{(p.price -  ((p.price * p.discountPercentage) / 100)).toFixed(2)} USD</h5>
                                        <h5 className="font-bold line-through text-stone-300">{p.price.toFixed(2)}</h5>
                                    </div>
                                </div>
                            </Link>
                        ))
                }
            </div>
        </div>
    );

}

export default SearchResult;