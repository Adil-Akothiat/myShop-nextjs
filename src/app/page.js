import React, { Suspense } from "react";
import Home from "./home/home";
import HeadFoot from "@/components/headFoot/headFoot";
// import { getAllProducts, getAllCategories } from "../api/get";
// import Products from "./products/page";

export default async function MainPage() {


  return (
    <Suspense>
      <main>
        <HeadFoot>
          <Home />
        </HeadFoot>
      </main>
    </Suspense>
  );
}