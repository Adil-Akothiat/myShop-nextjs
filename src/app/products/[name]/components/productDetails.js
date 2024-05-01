import React, { useState, useEffect } from "react";
// import Link from "next/link";
import { addItem } from "@/redux/cart/store";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const [priceRed, setPriceRed] = useState(0);

    const [quantity, setQuantity] = useState(1);
    const calcStars = () => {
        var stars = [];
        for (let i = 1; i <= Math.round(product.rating.rate); i++) stars.push(1);
        for (let i = 1; i <= 5 - stars.length; i++) stars.push(0);
        return stars;
    }
    const addItemHandler = ()=> {
        if(priceRed !== 0) {
            dispatch(addItem({...product, quantity, price: priceRed}));
            return
        }
        dispatch(addItem({...product, quantity}));
    }

    useEffect(()=> {
        const per = searchParams.get("reduce");
        if(per) {
            setPriceRed((product.price - (Number(per) * product.price)).toFixed(2));
        }
    }, [searchParams, product.price])

    return (
        <div className="grid grid-cols-1 gap-y-5 h-fit p-4 rounded-md">
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <div className="grid grid-cols-1 gap-y-1">
                <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 text-lg">
                        {
                            priceRed === 0 ? <>{product.price} USD</> :
                            <>
                                <span className="line-through text-stone-500 mr-2">{product.price}</span>
                                <span> {priceRed} USD</span>
                            </>
                        }
                    </span>
                    <span className="bg-yellow-400 text-white rounded-md px-2">{product.category}</span>
                </div>
                <div className="flex fill-yellow-400 w-fit cursor-pointer" title="rating">
                    {
                        calcStars().map((star, i) => star === 1 ? (
                            <svg key={"str-" + i} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
                        ) :
                            (
                                <svg key={"str-" + i} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                            )

                        )
                    }
                    <span className="text-stone-400 text-sm">({product.rating.count})</span>
                </div>
            </div>
            <div className="flex items-center w-fit border text-xl rounded overflow-hidden">
                <button
                    className="px-4 py-2 hover:bg-slate-700 hover:text-white duration-300"
                    onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}
                >-</button>
                <input type="number" name="quantity" id="qt" value={quantity} readOnly={true} className="border-l pl-2 border-r w-16 h-10 text-center outline-none" />
                <button
                    className="px-4 py-2 hover:bg-slate-700 hover:text-white duration-300"
                    onClick={() => setQuantity(quantity + 1)}
                >+</button>
            </div>
            <div>
                <button
                    className="btn btn-neutral"
                    onClick={addItemHandler}
                >
                    Add to Cart
                </button>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-y-8">
                <h4 className="border-b py-3 font-semibold">Description</h4>
                <p className="text-stone-500 leading-relaxed">{product.description}</p>
            </div>
        </div>
    );
}

export default ProductDetails;