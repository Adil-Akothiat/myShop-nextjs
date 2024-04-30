"use client";
import React from "react";
import Section1 from "./components/sections/section1";
import Section2 from "./components/sections/section2";
import "./home.css";
import Section3 from "./components/sections/section3";
import Section4 from "./components/sections/section4";
import Section5 from "./components/sections/section5";
import { Provider } from "react-redux";
import store from "@/redux/cart/store";

const Home = ({ products }) => {
    return (
        <Provider store={store}>
            <div className="grid grid-cols-1 gap-y-20">
                <Section1 products={products} />
                <Section2 products={products} />
                <Section3 products={products} />
                <Section4 products={products} />
                <Section5 />
            </div>
        </Provider>
    );
}

export default Home;