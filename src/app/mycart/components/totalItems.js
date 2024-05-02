"use client";
import React from "react";

const TotalItems = ({ items, count }) => {
    const shipping = 12.75;
    const totalPrice = items.length > 0 ? items.map(item => (item.price - ((item.price * item.discountPercentage) / 100)) * item.quantity).reduce((ac, cu) => ac + cu).toFixed(2) : 0;
    
    return (
        <div className="border rounded-md h-fit">
            <div className="p-4 border-b">
                <h5>Basket Total</h5>
            </div>
            <div className="p-4 grid grid-cols-1 gap-y-4">
                <div className="flex items-center justify-between">
                    <strong>{count} article{count > 1 ? "s" : ""}</strong>
                    <span>{totalPrice} USD</span>
                </div>
                {
                    count > 0 ? (
                        <>
                            <div className="flex items-center justify-between">
                                <strong>Shipping</strong>
                                <span>{shipping} USD</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <strong>Total</strong>
                                <strong>{(Number(totalPrice) + shipping).toFixed(2)} USD</strong>
                            </div>
                        </>
                    ) : null
                }
                <div>
                    <button className="btn btn-neutral w-full">Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default TotalItems;