"use client";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef } from "react";

const ByCategory = ({ categories, setCatHandler }) => {
    const select = useRef();
    const searchParams = useSearchParams();
    const memorizedSetCatHandler = useCallback(() => {
        const searchCat = searchParams.get("category");
        if (searchCat !== "" && searchCat !== null && categories.map(c => c.value).includes(searchCat)) {
            select.current.value = searchCat;
            setCatHandler(searchCat);
        } else {
            select.current.value = searchCat;
            setCatHandler("Category");
        }
    }, [searchParams])

    const changeHandler = (e) => {
        setCatHandler(e.target.value);
    }

    useEffect(() => {
        memorizedSetCatHandler();
    }, [memorizedSetCatHandler])
    return (
        <div className="mb-4">
            <h4 className="font-bold mb-4">Category:</h4>
            <select
                className="select w-full max-w-xs bg-slate-100" defaultValue="Category"
                onChange={changeHandler}
                ref={select}
            >
                <option>Category</option>
                {
                    categories.map(cat => <option key={cat.value} value={cat.value}>{cat.tagContent}</option>)
                }
            </select>
        </div>
    );
}

export default ByCategory;