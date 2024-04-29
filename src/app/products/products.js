"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./components/productCard/productCard";
import Pagination from "./components/pagination";
import FilterProducts from "./components/filter/filter";
import { filterByCategory, filterByPrice, quickSort } from "./components/utils/utils";
import Unfound from "./components/alert/unfound";
import Loader from "../../components/loader/loader";

const Products = ({ 
    products, 
    categories
}) => {
    const [myProducts, setMyProducts] = useState([]);
    const [maxPrice, setMaxPrice] = useState(null);
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pagProducts, setPagProducts] = useState(products);
    // const [orderPrice, setOrderPrice] = useState(null);
    const [resetPrice, setResetPrice] = useState(false);

    const setCatHandler = (category)=> {
        if(category != "Category") {
            var filteredProducts = filterByCategory(products, category);
            if(maxPrice != null) {
                filteredProducts = filterByPrice(filteredProducts, Math.min(...products.map(({price})=> +price)), maxPrice)
            }
            setMyProducts(filteredProducts);
            setCategory(category);
            setPagProducts(filteredProducts);
            return;
        }
        setMyProducts(products);
        setCategory(null);
        setPagProducts(products);
        updateHandler(0, 6, products);
        // sortProducts();
    }
    const priceHandler = (minPrice, maxPrice)=> {
        var filteredProducts = filterByPrice(products, minPrice, maxPrice);
        if (category != null) {
            filteredProducts = filterByCategory(filteredProducts, category);
        }
        setMyProducts(filteredProducts);
        setMaxPrice(maxPrice);
        setPagProducts(filteredProducts);
        updateHandler(0, 6, filteredProducts);
        // sortProducts();
    }
    const resetHandler = ()=> {
        setMyProducts(products);
        setMaxPrice(null);
        setCategory(null);
        document.querySelector("select").value = "Category";
        document.querySelector("input[type='range']").value = Math.min(...products.map(({price})=> +price));
        setPagProducts(products);
        updateHandler(0, 6, products);
        resetRadio();
        setResetPrice(true);
    }

    
    const updateHandler = (s, e, p)=> {
        window.scrollTo(0, 0);
        setLoading(true);
        setMyProducts(p.slice(s, e));
        setLoading(false);
        document.getElementById("paginnation").classList.remove("opacity-0");
        // sortProducts();
    }
    
    function resetRadio () {
        document.querySelectorAll("[name='price_order']").forEach(e=> e.checked = false);
    }
    // function sortProducts () {
    //     if(orderPrice !== null) {
    //         setOrderPrice(orderPrice);
    //     }
    // }

    // const updateByPriceOrderHandler = (order)=> setOrderPrice(order);

    // order change state
    // useEffect(()=> {
    //     if(orderPrice !== null) {    
    //         if(orderPrice === "low") {
    //             setMyProducts(quickSort(myProducts, "asc"));
    //         }
    //         if(orderPrice === "high") {
    //             setMyProducts(quickSort(myProducts, "desc"));            
    //         }
    //     }
    // }, [orderPrice, myProducts])

    return (
        <div className="md:flex justify-between gap-x-6">
            <FilterProducts 
                products={products} 
                setCatHandler={setCatHandler} 
                categories={categories} 
                priceHanlder={priceHandler}
                resetHandler={resetHandler}
                // updateByPriceOrder={updateByPriceOrderHandler}
                resetPrice={resetPrice}
            />
            <div className="flex-initial md:w-9/12 relative min-h-64">
                {
                    loading ?
                    <Loader />
                    :
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mb-6">
                    {
                        myProducts.length > 0 ? myProducts.map(product => <ProductCard key={product.id} product={product} />)
                        :
                        <Unfound message={"The products doesn't exist!"}/>
                    }
                    </div>
                }
                <Pagination 
                    products={pagProducts}
                    updateProducts={updateHandler}
                />
            </div>
        </div>
    );
}
export default Products;