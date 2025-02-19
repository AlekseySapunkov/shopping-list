import axios from "axios";
const deleteApiById = async (id) => {
    const response = await axios.delete(`http://localhost:5100/items/${id}`);
    return response.data;

};
export default deleteApiById;
