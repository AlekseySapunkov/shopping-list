import "./ItemCost.css";
import Card from "../UI/Card";
import  { useState } from "react";
import Button from "./Button";
import deleteApiById from "../../services/DeleteApi";

const ItemCost = (props) => {
  const [isItemDeleted, deleteItem] = useState(false);
  const description = props.description;
  const month = props.date.toLocaleString("ru-Ru", { month: "long" });
  const day = props.date.toLocaleString("ru-Ru", { day: "numeric" });
  const year = props.date.toLocaleString("ru-Ru", { year: "2-digit" });
  const costTitle = props.price;
  const id = props.id;
  const deleteItemHandler = async (event) => {
    event.preventDefault();
    deleteItem(true);
    try {
      const apiResponse = await deleteApiById(id);
      console.log(apiResponse.express);
    } catch (err) {
      console.error(err);
    }
  };
  const changeDescriptionHandler = () => {
    const data = {
      id,
      amount: props.price,
      date: props.date,
      description,
    };
    props.changeOnClick(data);
  };
  return (
    !isItemDeleted && (
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
        <Button type="button" onClick={changeDescriptionHandler} value={id}>
          Изменить описание
        </Button>
        <Button onClick={deleteItemHandler}>Удалить</Button>
      </Card>
    )
  );
};
export default ItemCost;
