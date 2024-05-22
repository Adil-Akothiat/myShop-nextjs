import HeadFoot from "@/components/headFoot/headFoot";
import React, { Suspense } from "react";
import Product from "./product";
import { getData } from "@/api/get";
import Loader from "@/app/loader/loader";

const ProductPage = async () => {
    const products = await getData("products");
    return (
        <Suspense fallback={<Loader />}>
            <HeadFoot>
                <main style={{ minHeight: "100vh" }} className="my-10 px-4 md:px-10 lg:px-16 xl:px-24">
                    <Product products={products} />
                </main>
            </HeadFoot>
        </Suspense>
    );
}

export default ProductPage;