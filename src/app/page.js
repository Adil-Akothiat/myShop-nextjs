import React, { Suspense } from "react";
import Home from "./home/home";
import HeadFoot from "@/components/headFoot/headFoot";
import { getAllProducts } from "../api/get";
// import Products from "./products/page";

export default async function MainPage() {
  var products = await getAllProducts();

  return (
    <Suspense>
      <main>
        <HeadFoot>
          <Home products={products}/>
        </HeadFoot>
      </main>
    </Suspense>
  );
}