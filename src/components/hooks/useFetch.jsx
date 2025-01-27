import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (previousItems) => {
  const [items, setItems] = useState(previousItems);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5100/items");
        const items = result.data.map((element) => {
          const { id, item_name: description, date, price } = element;
          return { id, description, date: new Date(date), price };
        });
        setItems(items);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return {items, error, setItems };
};

export default useFetch;
