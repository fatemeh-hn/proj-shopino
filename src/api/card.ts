const getProduct = async () => {
    const response = await fetch("https://dummyjson.com/products",
        { method: "GET" })
    const res = await response.json()
    console.log(res);
    return res

}
export default getProduct

