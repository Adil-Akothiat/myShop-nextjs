"use client";
import HeadFoot from "@/components/headFoot/headFoot";
import React, { Suspense } from "react";
import MyCart from "./cart";
import { Provider } from "react-redux";
import store from "@/redux/cart/store";
import Loader from "../loader/loader";

const MyCartPage = () => {
    return (
        <HeadFoot>
            <Suspense fallback={<Loader />}>
                <Provider store={store}>
                    <main style={{minHeight:"100vh"}}>
                        <MyCart />
                    </main>
                </Provider>
            </Suspense>
        </HeadFoot>
    );
}

export default MyCartPage;