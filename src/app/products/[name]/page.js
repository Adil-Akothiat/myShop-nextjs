import HeadFoot from "@/components/headFoot/headFoot";
import React, { Suspense } from "react";
import Product from "./product";
import { getAllProducts } from "@/api/get";
import Loader from "@/app/loader/loader";

const ProductPage = async () => {
    const products = await getAllProducts();

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