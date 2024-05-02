import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { getAllCategories, getAllProducts } from "@/api/get";

const HeadFoot = async ({ children })=> {
    const categories = await getAllCategories();
    const products = await getAllProducts();
    
    return(
        <>
            <Header categories={categories} products={products}/>
            {
                children
            }
            <Footer />
        </>
    );
}

export default HeadFoot;