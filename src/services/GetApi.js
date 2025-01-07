import axios from "axios";
const getApi = async () => {
  const connectionResponse = await axios.get("http://localhost:5100/items");
  return connectionResponse.data;
};
export default getApi;
