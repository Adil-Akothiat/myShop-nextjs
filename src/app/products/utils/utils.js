const filterByCategory = (products, cat) => {
    return products.filter(({ category }) => category.trim() == cat.trim());
}
const filterByPrice = (products, minPrice, maxPrice) => {
    return products.filter(({ price }) => price >= minPrice && price <= maxPrice);
}
const quickSort = (products, type) => {
    if (products.length <= 1) {
        return products;
    }

    var pivot = products[0];
    var leftP = [];
    var rightP = [];

    for (let i = 1; i < products.length; i++) {
        if (products[i].price < pivot.price) {
            if(type==="asc") {
                leftP.push(products[i]);
            }
            if(type==="desc"){
                rightP.push(products[i]);
            }
        } else {
            if(type==="asc") {
                rightP.push(products[i]);
            }
            if(type==="desc"){
                leftP.push(products[i]);
            }
        }
    }
    return [...quickSort(leftP, type), pivot, ...quickSort(rightP, type)];
}

export {
    filterByCategory,
    filterByPrice,
    quickSort
}