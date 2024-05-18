const getData = async (query) => {
    var response = await fetch("https://dummyjson.com/"+query).then(res=> res.json());
    if(query === "products") {
        return response.products;
    }
    return response;
}
const url = 'https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=3256804591426248';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d0500adeemsh2874fe9c5d91229p186794jsn13f8b2bed98d',
		'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
};

export {
    getData
};