import ProductCard from "@/app/products/components/productCard/productCard";
import Link from "next/link";
import React from "react";

const PopularProducts = ({ products }) => {
    const popularProducts = products.slice(0, 12)
    return (
        <section className="px-4 md:px-10 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {
                    popularProducts.map((product, i) => <ProductCard key={"pkey-" + i} product={product} />)
                }
            </div>
            <div className="mx-auto mt-10" style={{width:"fit-content"}}>
                <Link type="button" href="/products" className="btn btn-outline btn-neutral">
                    View All Products
                </Link>
            </div>
        </section>
    );
}

export default PopularProducts;