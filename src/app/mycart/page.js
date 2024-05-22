"use client";
import HeadFoot from "@/components/headFoot/headFoot";
import React, { Suspense } from "react";
import MyCart from "./cart";
import { Provider } from "react-redux";
import store from "@/redux/cart/store";
import Loader from "../loader/loader";

const MyCartPage = () => {
    return (
        <Suspense fallback={<Loader />}>
            <HeadFoot>
                <Provider store={store}>
                    <main style={{ minHeight: "100vh" }} className="my-10 px-4 md:px-10 lg:px-16 xl:px-24">
                        <MyCart />
                    </main>
                </Provider>
            </HeadFoot>
        </Suspense>
    );
}

export default MyCartPage;