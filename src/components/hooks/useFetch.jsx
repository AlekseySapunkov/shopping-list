import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (arg) => {
  const [savedItems, setSavedItems] = useState(arg);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5100/items");
        console.log(result);
        const items = result.data.map((element) => {
          const { id, item_name: description, date, price } = element;
          return { id, description, date: new Date(date), price };
        });
        setSavedItems(items);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { savedItems, error, setSavedItems };
};

export default useFetch;
