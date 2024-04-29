import ProductCard from "@/app/products/components/productCard/productCard";
import Link from "next/link";
import React from "react";

const Section3 = ({ products }) => {
    const popularProducts = products.slice(12, 22)
    return (
        <section className="grid grid-cols-1 gap-y-8">
            <h3 className="text-2xl font-bold text-slate-700 pl-3 after relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-slate-700">Popular Products</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {
                    popularProducts.map((product, i) => <ProductCard key={"pkey-" + i} product={product} />)
                }
            </div>
            <div className="mx-auto" style={{width:"fit-content"}}>
                <Link type="button" href="/products" className="btn btn-outline btn-neutral">
                    View All Products
                </Link>
            </div>
        </section>
    );
}

export default Section3;