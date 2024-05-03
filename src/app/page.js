import React, { Suspense } from "react";
import Home from "./home/home";
import HeadFoot from "@/components/headFoot/headFoot";
import { getAllProducts, getData } from "../api/get";
import Loader from "./loader/loader";

export default async function MainPage() {
  var products = await getData("products");
  return (
    <Suspense fallback={<Loader />}>
      <HeadFoot>
        <main style={{ minHeight: "100vh" }}>
          <Home products={products} />
        </main>
      </HeadFoot>
    </Suspense>
  );
}