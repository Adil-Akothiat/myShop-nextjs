import React, { useState, useEffect } from "react";

const ByOrder = ({ updateByPriceOrder }) => {
    const [priceOrder, setPriceOrder] = useState(null);

    const setLowHandler = ({target})=> {
        setPriceOrder(target.value);
    };
    const setHighHandler = ({target})=> {
        setPriceOrder(target.value);
    }
    
    // on state change
    useEffect(()=> {
        if(priceOrder != null) {
            updateByPriceOrder(priceOrder);
        }
    },[priceOrder])
    return (
        <div className="mb-4">
            <h4 className="font-bold mb-4">Price Order:</h4>
            <div className="flex items-center">
                <div className="flex items-center">
                    <input type="radio" name="price_order" id="low-id" value="low" className="cursor-pointer radio" onChange={setLowHandler}/>
                    <label className="ml-3 cursor-pointer" htmlFor="low-id">Lower</label>
                </div>
                <div className="flex items-center ml-8">
                    <input type="radio" name="price_order" id="high-id" value="high" className="cursor-pointer radio" onChange={setHighHandler}/>
                    <label className="ml-3 cursor-pointer" htmlFor="high-id">High</label>
                </div>
            </div>
        </div>
    );
}

export default ByOrder;