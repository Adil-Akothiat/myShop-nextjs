import React from "react";
import Image from "next/image";

const ProductImage = ({ product }) => {
    return (
        <div className="h-fit p-4 rounded-md md:border">
            <Image
                src={product.thumbnail}
                alt={product.title}
                width="0"
                height="0"
                className="w-full h-full md:object-contain md:max-h-80"
            />
        </div>
    );
}

export default ProductImage;