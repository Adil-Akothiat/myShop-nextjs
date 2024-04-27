import React from "react";
import ByCategory from "./byCategory";
import ByPrice from "./byPrice";
import ByOrder from "./byOrder";

const FilterProducts = ({ products, setCatHandler, categories, priceHanlder, resetHandler, updateByPriceOrder, resetPrice }) => {
    var prices = products.map(({price})=> +price);
    categories = categories.map(cat=> {
        return {
            tagContent: `${cat} (${products.map(({category})=> category == cat? 1 : 0).reduce((a, b)=> a+b)})`,
            value: cat
        }
    })
    return (
        <div className="flex-initial md:w-3/12">
            <button className="bg-slate-100 float-end p-1 rounded border text-xs font-bold" onClick={resetHandler}>Reset</button>
            <ByCategory categories={categories} setCatHandler={setCatHandler}/>
            <ByPrice prices={prices} priceHandler={priceHanlder}  resetPrice={resetPrice}/>
            <ByOrder updateByPriceOrder={updateByPriceOrder}/>
        </div>
    );
}
export default FilterProducts;