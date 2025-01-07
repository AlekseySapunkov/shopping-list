const getApi = async () => {
  const connectionResponse = await fetch("http://localhost:5100/items");
  return connectionResponse.json();
};
export default getApi;
