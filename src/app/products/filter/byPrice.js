"use client";
import React, { useEffect, useState } from "react";

const ByPrice = ({ prices, priceHandler, resetPrice })=> {
    let [price, setPrice] = useState(Math.min(...prices));
    const setRangePrice = ({target})=> {
        setPrice(target.value);
        priceHandler(Math.min(...prices), target.value);
    }
    useEffect(()=> {
        if(resetPrice) {
            setPrice(Math.min(...prices));
        }
    }, [resetPrice])
    return (
        <div className="mb-4">
            <h4 className="font-bold mb-4">Price:</h4>
            <div>
                <input 
                    type="range"
                    id="by-price"
                    min={Math.min(...prices)} 
                    max={Math.max(...prices)} 
                    className="range"
                    value={price}
                    onChange={setRangePrice}
                    title={price}
                />
                <div className="flex w-full justify-between">
                    <span className="text-sm">{Math.min(...prices)} USD</span>
                    <span className="text-sm">{Math.max(...prices)} USD</span>
                </div>
            </div>
        </div>
    );
}

export default ByPrice;