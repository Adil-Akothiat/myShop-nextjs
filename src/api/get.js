const getData = async (query) => {
    var response = await fetch("https://dummyjson.com/"+query).then(res=> res.json());
    if(query === "products") {
        return response.products;
    }
    return response;
}

export {
    getData
};