import Button from "./Button";
import "./CostForm.css";
import { useEffect, useState } from "react";
import postApi from "../../services/PostApi";
import putApi from "../../services/PutApi";

const CostForm = (props) => {
  const [id, setId] = useState(props.data.id);
  const [description, setName] = useState(props.data.description);
  const [amount, setAmount] = useState(props.data.amount);
  const [date, setDate] = useState(props.data.date);
  const [isInputValid, setInputValid] = useState(true);
  const [isButtonSubmitVisible, setButtonSubmitVisibility] = useState(true);
  const [isButtonChangeVisible, setButtonChangeVisibility] = useState(false);
  useEffect(() => {
    if (id !== "") {
      setButtonSubmitVisibility(false);
      setButtonChangeVisibility(true);
    } else {
      setButtonSubmitVisibility(true);
      setButtonChangeVisibility(false);
    }
  }, [id]);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const apiData = {
    item_name: description,
    date,
    price: amount,
  };
  const costData = {
    id: id,
    description: description,
    date: new Date(date),
    price: amount,
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const apiResponse = await postApi(apiData);
      console.log(apiResponse);
    } catch (err) {
      console.error(error);
    }
    console.log(costData);
    if (event.target.value > 0) {
      setInputValid(true);
    }
    if (description.trim().length === 0 || amount === 0) {
      setInputValid(false);
      alert("поле название не заполнено ");
      return;
    } else if (amount.length === 0) {
      alert("не указана цена товара!");
      setInputValid(false);
      return;
    }

    props.onSaveCost(costData);
    setName("");
    setDate("");
    setAmount("");
  };
  const onClickCancelHandler = () => {
    props.costFormValue();
  };
  const onClickChangeHandler = async () => {
    const response = await putApi(id, apiData);
    props.onSaveCost(costData);
    setName("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={description}
            style={{ borderBlockColor: isInputValid ? "black" : "red" }}
          />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
            style={{ borderBlockColor: isInputValid ? "black" : "red" }}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="0.01"
            step="0.01"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-cost__actions">
          {isButtonSubmitVisible && (
            <Button type="submit">Добавить расход</Button>
          )}
          {isButtonChangeVisible && (
            <Button type="button" onClick={onClickChangeHandler}>
              Внести изменения
            </Button>
          )}
          <Button type="button" onClick={onClickCancelHandler}>
            отмена
          </Button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
