import HeadFoot from "@/components/headFoot/headFoot";
import React, { Suspense } from "react";
import Product from "./product";
import { getAllProducts, getData } from "@/api/get";
import Loader from "@/app/loader/loader";

const ProductPage = async () => {
    const products = await getData("products");

    return (
        <HeadFoot>
            <main style={{minHeight:"100vh"}}>
                <Suspense fallback={<Loader />}>
                    <Product products={products} />
                </Suspense>
            </main>
        </HeadFoot>
    );
}

export default ProductPage;