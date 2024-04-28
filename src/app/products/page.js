import React, { Suspense } from "react";
import Products from "./products";
import { getAllProducts, getAllCategories } from "../../api/get";
import HeadFoot from "@/components/headFoot/headFoot";

const ProductPage = async () => {
    var products = await getAllProducts();
    products = products.map(p => ({
        ...p,
        image: p.image.split("/")[p.image.split("/").length - 1]
    }));
    const categories = await getAllCategories();

    return (
        <Suspense>
            <HeadFoot>
                <Products
                    products={products}
                    categories={categories}
                />
            </HeadFoot>
        </Suspense>
    );
}

export default ProductPage;