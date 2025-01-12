import axios from "axios";
const postApi = async (data) => {
  try {
    const response = await axios.post("http://localhost:5100/items", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
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
export default postApi;
