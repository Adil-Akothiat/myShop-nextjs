import React from "react";
import Home from "./home/page";
import HeadFoot from "@/components/headFoot/headFoot";
// import { getAllProducts, getAllCategories } from "../api/get";
// import Products from "./products/page";

export default async function MainPage() {
 

  return (
    <main>
      <HeadFoot>
        <Home />
      </HeadFoot>
    </main>
  );
}