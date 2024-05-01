import React, { Suspense } from "react";
import Products from "./products";
import { getAllProducts, getAllCategories } from "../../api/get";
import HeadFoot from "@/components/headFoot/headFoot";
import Loader from "../loader/loader";

const ProductPage = async () => {
    var products = await getAllProducts();
    const categories = await getAllCategories();

    return (
        <HeadFoot>
            <Suspense fallback={<Loader />}>
                <main style={{ minHeight: "100vh" }}>
                    <Products
                        products={products}
                        categories={categories}
                    />
                </main>
            </Suspense>
        </HeadFoot>
    );
}

export default ProductPage;