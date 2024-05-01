import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ShopCardBar = () => {
    const count = useSelector(state=> state.cart.count);
    const items =  useSelector(state=> state.cart.items);
    const totalPrice = items.length > 0 ? items.map(item=> item.price * item.quantity).reduce((ac, cu)=> ac+cu).toFixed(2) : 0;

    useEffect(()=> {
        const addAnimation = ()=> {
            const basketBtn = document.getElementById("basket-shop");
            basketBtn.classList.add("move-up");
            basketBtn.addEventListener("animationend", ()=> basketBtn.classList.remove("move-up"));
        }
        if(count) {
            addAnimation();
        }
    }, [count])

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" id="basket-shop">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-neutral badge-sm indicator-item">{count}</span>
                </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[80] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">{count} Items</span>
                    <span className="text-info">Subtotal: {totalPrice} USD</span>
                    <div className="card-actions">
                        <Link href="/mycart" className="btn btn-primary btn-block">View cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopCardBar;