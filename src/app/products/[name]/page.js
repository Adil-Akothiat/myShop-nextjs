import HeadFoot from "@/components/headFoot/headFoot";
import React from "react";
import Product from "./product";
import { getAllProducts } from "@/api/get";

const ProductPage = async ()=> {
    const products = await getAllProducts();
    
    return (
        <main>
            <HeadFoot>
                <Product products={products}/>
            </HeadFoot>
        </main>
    );
}

export default ProductPage;