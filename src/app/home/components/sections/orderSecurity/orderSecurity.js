import React from "react";
import Card from "./card";

const OrderSecurity = ()=> {
    const orderSecurity = [
        {
            feature: "Free Shipping",
            description: "Free on order over $100"
        },
        {
            feature: "Security Payment",
            description: "100% security payment"
        },
        {
            feature: "30 Day Return",
            description: "30 day money guarantee"
        },
        {
            feature: "24/7 Support",
            description: "Support every time fast"
        }
    ]
    return (
        <section className="px-4 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 xl:grid-cols-4">
            {
                orderSecurity.map((e, i)=> <Card key={"card-"+i} e={e}/>)
            }    
        </section>
    );
}

export default OrderSecurity;