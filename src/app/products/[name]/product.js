"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../components/productCard/card.css";
import ProductCard from "../components/productCard/productCard";
import Unfound from "../components/alert/unfound";
import store from "@/redux/cart/store";
import { Provider } from "react-redux";

const Product = ({ products }) => {
    const [quantity, setQuantity] = useState(1);
    const pathname = usePathname();
    const decodedTitle = decodeURIComponent(pathname.split("/")[pathname.split("/").length - 1]).trim();
    var product = products.filter(p=> p.title.trim() === decodedTitle)[0];

    if (product === undefined || product === null) {
        return (
            <Unfound message={"The product doesn't exist right now!"} />
        );
    }
    const calcStars = () => {
        var stars = [];
        for (let i = 1; i <= Math.round(product.rating.rate); i++) stars.push(1);
        for (let i = 1; i <= 5 - stars.length; i++) stars.push(0);
        return stars;
    }

    return (
        <Provider store={store}>
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-none md:gap-x-6">
                <div className="h-fit p-4 rounded-md md:border">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width="0"
                        height="0"
                        className="w-full h-full md:object-contain md:max-h-80"
                    />
                </div>
                <div className="grid grid-cols-1 gap-y-5 h-fit p-4 rounded-md">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <div className="grid grid-cols-1 gap-y-1">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-700 text-lg">{product.price} USD</span>
                            <span className="bg-yellow-400 text-white rounded-md px-2">{product.category}</span>
                        </div>
                        <div className="flex fill-yellow-400 w-fit cursor-pointer" title="rating">
                            {
                                calcStars().map((star, i) => star === 1 ? (
                                    <svg key={"str-" + i} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
                                ) :
                                    (
                                        <svg key={"str-" + i} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                                    )

                                )
                            }
                            <span className="text-stone-400 text-sm">({product.rating.count})</span>
                        </div>
                    </div>
                    <div className="flex items-center w-fit border text-xl rounded overflow-hidden">
                        <button
                            className="px-4 py-2 hover:bg-slate-700 hover:text-white duration-300"
                            onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}
                        >-</button>
                        <input type="number" name="quantity" id="qt" value={quantity} readOnly={true} className="border-l pl-2 border-r w-16 h-10 text-center outline-none" />
                        <button
                            className="px-4 py-2 hover:bg-slate-700 hover:text-white duration-300"
                            onClick={() => setQuantity(quantity + 1)}
                        >+</button>
                    </div>
                    <div>
                        <Link href="#buy" className="btn btn-neutral">
                            Add to Cart
                        </Link>
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-y-8">
                        <h4 className="border-b py-3 font-semibold">Description</h4>
                        <p className="text-stone-500 leading-relaxed">{product.description}</p>
                    </div>
                </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-700 pl-3 after relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-slate-700 my-8">Related Products</h3>
            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
                {
                    products.filter(p=> p.category.trim() === product.category.trim() && p.title.trim() !== decodedTitle).map((p, i)=> i <= 3 ? <ProductCard key={"pgx-"+i} product={p}/> : null)
                }
            </div>
        </Provider>
    );
}

export default Product;