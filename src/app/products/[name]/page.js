import HeadFoot from "@/components/headFoot/headFoot";
import React, { Suspense } from "react";
import Product from "./product";
import { getAllProducts, getData } from "@/api/get";
import Loader from "@/app/loader/loader";

const ProductPage = async () => {
    const products = await getData("products");

    return (
        <Suspense fallback={<Loader />}>
            <HeadFoot>
                <main style={{ minHeight: "100vh" }}>
                    <Product products={products} />
                </main>
            </HeadFoot>
        </Suspense>
    );
}

export default ProductPage;