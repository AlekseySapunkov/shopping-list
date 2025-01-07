import axios from "axios";
const deleteApiById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5100/items/${id}`);
    return response.data.id;
  } catch (error) {
    console.error(error);
  }
};
export default deleteApiById;
