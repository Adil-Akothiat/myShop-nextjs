const getAllProducts = async ()=> {
    var products = await fetch("https://fakestoreapi.com/products").then(res=> res.json());
    products = products = products.map(p=> ({
        ...p,
        image: p.image.split("/")[p.image.split("/").length-1]
    }));
    return products;
}
const getByCategory = async (category)=> {
    return await fetch("https://fakestoreapi.com/products/category/"+category).then(res=> res.json());
}
const getAllCategories = async ()=> {
    return await fetch("https://fakestoreapi.com/products/categories").then(res=> res.json());
}

export {
    getAllProducts,
    getByCategory,
    getAllCategories
};