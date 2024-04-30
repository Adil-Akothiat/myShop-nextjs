"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/redux/cart/store";
import Items from "./components/items";
import TotalItems from "./components/totalItems";

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
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-none md:gap-x-4">
            <Items 
                items={items}
                count={count}
                addItemHandler={addItemHandler}
                removeItemHandler={removeItemHandler}
            />
            <TotalItems items={items} count={count}/>
        </div>
    );
}

export default MyCart;