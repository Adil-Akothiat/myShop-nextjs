"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Items = ({ items, addItemHandler, removeItemHandler, count }) => {
    const priceAfterDiscount = (price, discount) => (price - ((price * discount) / 100));
    if (count === 0) {
        return (
            <div className="border rounded-md">
                <div className="p-4 border-b">
                    <h5>Basket</h5>
                </div>
                <div className="p-4 grid grid-cols-1 gap-y-2">
                    <p className="text-stone-400 font-semibold">
                        You didn&apos;t have any product in cart.
                    </p>
                    <Link href="/products" className="btn btn-neutral w-fit">Buy Now</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="border rounded-md">
            <div className="p-4 border-b">
                <h5>Basket</h5>
            </div>
            {
                items.map((item, i) => (
                    <div key={"cart-" + i} className={`grid grid-cols-1 gap-y-3 p-4 md:grid-cols-2 md:gap-x-6 ${items.length === (i + 1) ? "" : "border-b"}`}>
                        <div className="grid grid-cols-1 gap-y-1 md:grid-cols-2 md:items-center">
                            <Link href={"/products/"+item.title}>
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    width="0"
                                    height="0"
                                    className="w-24 h-24 object-contain"
                                />
                            </Link>
                            <Link href={"/products/"+item.title}>
                                <h4 className="text-sm font-bold">{item.title}</h4>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-2 lg:items-center">
                            <div className="flex items-center max-w-60 border">
                                <button className="py-1 px-2 hover:bg-slate-700 hover:text-white"
                                    onClick={() => removeItemHandler(item)}
                                >-</button>
                                <input type="number" name={"quantity"} id={"qt-"+item.id} value={item.quantity} className="text-center border-l border-r w-full outline-none py-1 px-2" readOnly={true} min="1" max={`${item.stock}`}/>
                                <button className="py-1 px-2 hover:bg-slate-700 hover:text-white"
                                    onClick={() => addItemHandler(item)}
                                >+</button>
                            </div>
                            <div className="text-left lg:text-right">
                                <strong>{(priceAfterDiscount(item.price, item.discountPercentage) * item.quantity).toFixed(2)} USD</strong>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Items;