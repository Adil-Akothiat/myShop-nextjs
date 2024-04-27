import React from "react";
import Products from "./products";
import { getAllProducts, getAllCategories } from "../../api/get";
import HeadFoot from "@/components/headFoot/headFoot";

const ProductPage = async () => {
    const products = await getAllProducts();
    const categories = await getAllCategories();
    return (
        <HeadFoot>
            <Products
                products={products}
                categories={categories}
            />
        </HeadFoot>
    );
}

export default ProductPage;