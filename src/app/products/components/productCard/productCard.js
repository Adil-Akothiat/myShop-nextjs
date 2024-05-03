"use client";
import React from "react";
import Image from "next/image";
import "./card.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cart/store";
import ScrollAnimation from "@/aos/init";
// import Product from "../../[name]/product";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const priceAfterDiscount = (product.price - ((product.price * product.discountPercentage)/ 100)).toFixed(2);

    const calcStars = () => {
        var stars = [];
        for (let i = 1; i <= Math.round(product.rating); i++) stars.push(1);
        for (let i = 1; i <= 5 - stars.length; i++) stars.push(0);
        return stars;
    }

    const addItemHandler = () => {
        dispatch(addItem(product));
    }

    return (
        <ScrollAnimation animation="fade-up" duration={"2000"}>
            <div className="rounded-lg overflow-hidden bg-white custom-shadow">
                <div className="p-2">
                    <Link href={`/products/${product.title}`}>
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            title={product.title}
                            width="0"
                            height="0"
                            className="object-contain w-full h-40 lg:w-full lg:h-52 lg:object-cover mx-auto scale-90 hover:scale-100 duration-500"
                        />
                    </Link>
                </div>
                <div className="p-3 grid grid-cols-1 gap-y-3">
                    <div>
                        <h3 className="uppercase text-sm mb-2 text-stone-500">{product.brand}</h3>
                        <h3
                            className="font-bold w-3/4 mb-2"
                            title={product.title}
                        >
                            <Link href={`/products/${product.title}`} className="hover:text-slate-500">
                                {
                                    product.title.length === product.title.substr(0, 40).length ? product.title :
                                        product.title.substr(0, 30) + "..."
                                }
                            </Link>
                        </h3>
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
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <h4 className="text-xl font-semibold text-slate-500">{priceAfterDiscount} USD</h4>
                            <h4 className="line-through text-slate-400">{product.price.toFixed(2)}</h4>
                        </div>
                        <button
                            className="custom-shadow block w-fit h-fit p-2 rounded-md hover:bg-slate-700 fill-slate-700 hover:fill-white duration-700"
                            onClick={addItemHandler}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    );
}

export default ProductCard;