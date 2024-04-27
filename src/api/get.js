const getAllProducts = async ()=> {
    return await fetch("https://fakestoreapi.com/products").then(res=> res.json());
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