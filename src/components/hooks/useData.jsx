
import { useState } from "react";

const useData = (data)=>{
    const [item, setItem] = useState(data);

    if(data.id!==""){
        setItem({
            id: data.id,
            amount: data.amount,
            description: data.description,
            date: data.date,
          });
        }
    return [item, setItem]
}
export default useData