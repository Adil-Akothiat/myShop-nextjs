import React from "react";
import Image from "next/image";
import "./card.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <div className="rounded-lg overflow-hidden bg-white custom-shadow">
            <div className="p-2">
                <Link href="#buy">
                    <Image
                        src={product.image}
                        alt={product.title}
                        title={product.title}
                        width="0"
                        height="0"
                        className="object-contain w-40 h-40 mx-auto scale-90 hover:scale-100 duration-500"
                    />
                </Link>
            </div>
            <div className="p-3">
                <h3
                    className="font-bold mb-4 w-3/4"
                    title={product.title}
                >
                    <Link href="#buy" className="hover:text-slate-500">
                        {
                            product.title.length === product.title.substr(0, 40).length ? product.title :
                                product.title.substr(0, 30) + "..."
                        }
                    </Link>
                </h3>
                <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold text-slate-500 mb-2"><span className="text-2xl">{product.price}</span> <span className="text-sm">USD</span></h4>
                    <Link href="#buy" className="custom-shadow block w-fit h-fit p-2 rounded-md hover:bg-slate-700 fill-slate-700 hover:fill-white duration-700">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;