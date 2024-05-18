import React, { Suspense } from "react";
import Home from "./home/home";
import HeadFoot from "@/components/headFoot/headFoot";
import { getData } from "../api/get";
import Loader from "./loader/loader";

export default async function MainPage() {
  var products = await getData("products");
  var categories = await getData("products/categories");
  return (
    <Suspense fallback={<Loader />}>
      <HeadFoot>
        <main>
          <Home products={products} categories={categories}/>
        </main>
      </HeadFoot>
    </Suspense>
  );
}