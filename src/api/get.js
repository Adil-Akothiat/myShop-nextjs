const api = "https://dummyjson.com/";
const getData = async (query) => {
    const response = await fetch(api+query+"?limit=194").then(res=> res.json());
    // console.log(response);
    if(response?.products) {
        return response?.products;
    }
    if(response[0]?.slug) {
        return response?.map(c=> c.slug);
    }
    return response;
}

const getProduct = async (title)=> {
    const response = await fetch(api+"products/search?title="+title).then(res=> res.json());
    console.log(response);
}

export {
    getData,
    getProduct
};