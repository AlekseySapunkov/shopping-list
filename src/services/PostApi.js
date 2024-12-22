
import axios from "axios";
const postApi = async (data) => {
  try {
    const response = await axios.post('http://localhost:5200/items', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data
  } catch (error) {
    console.error(error);
  }
}
export default postApi;