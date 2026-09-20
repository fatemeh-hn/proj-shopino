const getProductDetails = async (id:string) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`,
        { method: "GET" })

    if (response.status === 200) {
        const resJson = await response.json();
        return resJson;
    }

    if (response.status === 404) {
        throw new Error("Not Found");
    }

    if (response.status === 500) {
        throw new Error("Server Error");
    }


}
export default getProductDetails
