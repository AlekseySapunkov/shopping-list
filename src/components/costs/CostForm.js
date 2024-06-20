import "./CostForm.css"
import React, {useState} from "react";
const CostForm = (props) => {
    const [description, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [formVisible, setFormVisible] = useState(props.CostFormValue)
    const nameChangeHandler =(event)=>{
        setName(event.target.value)
    };
    const amountChangeHandler =(event)=>{
        setAmount(event.target.value)
    };
    const dateChangeHandler =(event)=>{
        setDate(event.target.value)
    };
    const submitHandler =(event)=>{
        event.preventDefault();
        const costData = {
            description:description,
            date: new Date(date),
            price:amount,
        }
        console.log(costData);
        props.onSaveCost(costData);
        setName('');
        setDate('');
        setAmount('');
    }
    const onClickCancelHandler =()=>{
        setFormVisible(false)
        console.log(props)
        props.onSaveCost()
    }
  
    return <form onSubmit={submitHandler}>
         <div className="new-cost__controls">
         <div className="new-cost__control">
                <label>Название</label>
                <input type="text" onChange={nameChangeHandler} value={description}/>
            </div>
            <div className="new-cost__control">
            <label>Сумма</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount}/>
            </div>
            <div className="new-cost__control">
            <label>Дата</label>
                <input type="date" min="0.01" step="0.01" onChange={dateChangeHandler} value={date}/>
            </div>
            <div className="new-cost__actions"> 
<button type ="submit">Добавить расход</button>
<button type ="button" onClick={onClickCancelHandler}>отмена</button>
            </div>
            </div>
    </form>
    }
    export default CostForm