import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { getData } from "@/api/get";

const HeadFoot = async ({ children })=> {
    const categories = await getData("products/categories");
    const products = await getData("products");
    
    return(
        <>
            <Header categories={categories} products={products}/>
            {
                children
            }
            <Footer categories={categories}/>
        </>
    );
}

export default HeadFoot;