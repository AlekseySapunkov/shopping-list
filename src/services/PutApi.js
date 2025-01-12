import axios from "axios";
const putApi = async (id, data) => {
  try {
    const response = await axios.put(`http://localhost:5100/items/${id}`, data);
    const costData = {
      id: response.data.id,
      description: response.data.item_name,
      date: new Date(response.data.date),
      price: response.data.price,
    };
    return costData;
  } catch (error) {
    console.error(error);
  }
};
export default putApi;
