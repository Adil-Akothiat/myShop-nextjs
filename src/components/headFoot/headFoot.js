import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { getAllCategories } from "@/api/get";

const HeadFoot = async ({ children })=> {
    const categories = await getAllCategories();
    return(
        <>
            <Header categories={categories} />
            {
                children
            }
            <Footer />
        </>
    );
}

export default HeadFoot;