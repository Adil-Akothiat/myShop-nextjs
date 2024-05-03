// const getAllProducts = async ()=> {
//     var products = await fetch("https://fakestoreapi.com/products").then(res=> res.json());
//     products = products = products.map(p=> ({
//         ...p,
//         image: p.image.split("/")[p.image.split("/").length-1]
//     }));
//     return products;
// }
// const getByCategory = async (category)=> {
//     return await fetch("https://fakestoreapi.com/products/category/"+category).then(res=> res.json());
// }
// const getAllCategories = async ()=> {
//     return await fetch("https://fakestoreapi.com/products/categories").then(res=> res.json());
// }

const getData = async (query) => {
    var response = await fetch("https://dummyjson.com/"+query).then(res=> res.json());
    if(query === "products") {
        response = response.products.map(item=> ({
            ...item,
            thumbnail: item.thumbnail.split("/").slice(4).join("/"),
            images: item.images.map(img=> img.split("/").slice(4).join("/")).reverse()
        }));
        return response;
    }
    return response;
}

export {
    // getAllProducts,
    // getByCategory,
    // getAllCategories,
    getData
};