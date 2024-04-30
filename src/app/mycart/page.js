"use client";
import HeadFoot from "@/components/headFoot/headFoot";
import React from "react";
import MyCart from "./cart";
import { Provider } from "react-redux";
import store from "@/redux/cart/store";

const MyCartPage = ()=> {
    return (
        <Provider store={store}>
        <HeadFoot>
            <main>
                <MyCart />
            </main>
        </HeadFoot>
        </Provider>
    );
}

export default MyCartPage;