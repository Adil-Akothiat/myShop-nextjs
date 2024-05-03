import React, { Suspense } from "react";
import Products from "./products";
import { getAllProducts, getAllCategories, getData } from "../../api/get";
import HeadFoot from "@/components/headFoot/headFoot";
import Loader from "../loader/loader";

const ProductPage = async () => {
    // var products = await getAllProducts();
    const categories = await getData("products/categories");
    var products = await getData("products");

    return (
        <Suspense fallback={<Loader />}>
            <HeadFoot>
                <main style={{ minHeight: "100vh" }}>
                    <Products
                        products={products}
                        categories={categories}
                    />
                </main>
            </HeadFoot>
        </Suspense>
    );
}

export default ProductPage;