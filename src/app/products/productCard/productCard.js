import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-md overflow-hidden bg-white">
            <div className={styles.cardTCustom}>
                <Image
                    src={product.image}
                    alt={product.title}
                    width="0"
                    height="0"
                    className="object-cover w-max h-max scale-75 hover:scale-100 duration-300 ease-in" />
            </div>
            <div className="p-3 mt-4 border-t">
                <h3 className="font-bold mb-4 w-3/4">{product.title}</h3>
                <h4 className="text-xl font-semibold text-yellow-500 mb-2"><span className="text-2xl">{product.price}</span> <span className="text-sm">USD</span></h4>
                <button className="bg-sky-700 text-white rounded-md p-2">Shop Now</button>
            </div>
        </div>
    );
}

export default ProductCard;