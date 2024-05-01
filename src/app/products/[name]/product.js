"use client";
import { usePathname } from "next/navigation";
import React from "react";
import "../components/productCard/card.css";
import ProductCard from "../components/productCard/productCard";
import Unfound from "../components/alert/unfound";
import store from "@/redux/cart/store";
import { Provider } from "react-redux";
import ProductImage from "./components/ProductImage";
import ProductDetails from "./components/productDetails";
import ScrollAnimation from "@/aos/init";

const Product = ({ products }) => {
    const pathname = usePathname();
    const decodedTitle = decodeURIComponent(pathname.split("/")[pathname.split("/").length - 1]).trim();
    var product = products.filter(p=> p.title.trim() === decodedTitle)[0];

    if (product === undefined || product === null) {
        return (
            <Unfound message={"The product doesn't exist right now!"} />
        );
    }
    return (
        <Provider store={store}>
            <ScrollAnimation animation={"fade-up"} duration={"2000"}>
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-none md:gap-x-6">
                <ProductImage product={product}/>
                <ProductDetails product={product}/>
            </div>
            <h3 className="text-2xl font-bold text-slate-700 pl-3 after relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-slate-700 my-8">Related Products</h3>
            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
                {
                    products.filter(p=> p.category.trim() === product.category.trim() && p.title.trim() !== decodedTitle).map((p, i)=> i <= 3 ? <ProductCard key={"pgx-"+i} product={p}/> : null)
                }
            </div>
                </ScrollAnimation>
        </Provider>
    );
}

export default Product;