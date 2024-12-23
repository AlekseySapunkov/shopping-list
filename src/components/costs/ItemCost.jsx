import "./ItemCost.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import Button from "./Button";
import deleteApiById from "../../services/DeleteApi";

const ItemCost = (props) => {
  const [isItemDeleted, deleteItem] = useState(false)
  const [description, setDescription] = useState(props.description);
  const month = props.date.toLocaleString("ru-Ru", { month: "long" });
  const day = props.date.toLocaleString("ru-Ru", { day: "numeric" });
  const year = props.date.toLocaleString("ru-Ru", { year: "2-digit" });
  const costTitle = props.price;
  const changeDescriptionHandler = () => {
    setDescription("New Text");
    alert(description);
  };
  const deleteItemHandler = async(event) => {
    let id = 2;
    event.preventDefault()
    try{
      const apiResponse = await deleteApiById(id);
      console.log(apiResponse)
  }catch(err){
      console.error(error);
  }

  };
  return (
    <Card className="cost-item">
      <div className="cost-date">
        <div className="cost-date__day">{day}</div>
        <div className="cost-date__month">{month}</div>
        <div className="cost-date__year">{year}</div>
      </div>
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">{costTitle}</div>
      </div>
         <Button onClick={changeDescriptionHandler}>Изменить описание</Button> 
         <Button onClick={deleteItemHandler}>Удалить</Button>
  
    </Card>
  );
};
export default ItemCost;
