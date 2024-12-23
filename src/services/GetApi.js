const getApi = async()=>{
    const connectionResponse = await fetch("http://localhost:5200/items")
    return connectionResponse.json()
 }
 export default getApi