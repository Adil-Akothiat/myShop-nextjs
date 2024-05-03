"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/redux/cart/store";
import Items from "./components/items";
import TotalItems from "./components/totalItems";
import ScrollAnimation from "@/aos/init";

const MyCart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const count = useSelector(state => state.cart.count);

    const addItemHandler = (item) => {
        dispatch(addItem(item))
    }
    const removeItemHandler = (item) => {
        dispatch(removeItem(item));
    }


    return (
        <ScrollAnimation animation={"fade-up"} duration={"2000"}>
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-y-none lg:gap-x-4 mb-16">
            <Items 
                items={items}
                count={count}
                addItemHandler={addItemHandler}
                removeItemHandler={removeItemHandler}
                />
            <TotalItems items={items} count={count}/>
        </div>
        </ScrollAnimation>
    );
}

export default MyCart;