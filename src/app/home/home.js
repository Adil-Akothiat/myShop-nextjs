"use client";
import React, { useEffect } from "react";
import "./home.css";
import { Provider } from "react-redux";
import store from "@/redux/cart/store";
import Banner from "./components/sections/banner/banner";
import LatestProducts from "./components/sections/latestProducts/latestProducts";
import OurBrands from "./components/sections/ourBrands";
import OrderSecurity from "./components/sections/orderSecurity/orderSecurity";
import PopularProducts from "./components/sections/popularProducts";
import Deals from "./components/sections/dealsOfDay/deals";

const Home = ({ products, categories }) => {
    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <Provider store={store}>
            <div className="grid grid-cols-1 gap-y-20">
                <Banner categories={categories} />
                <OrderSecurity />
                <PopularProducts products={products} />
                <LatestProducts products={products} />
                <Deals products={products} />
                <OurBrands products={products}/>
            </div>
        </Provider>
    );
}

export default Home;