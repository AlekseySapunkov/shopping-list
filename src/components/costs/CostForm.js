import "./CostForm.css"
import React, {useState} from "react";
const CostForm = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
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
            name:name,
            date:date,
            amount:amount,
        }
        console.log(costData);
        setName('');
        setDate('');
        setAmount('');
    }
    return <form onSubmit={submitHandler}>
         <div className="new-cost__controls">
         <div className="new-cost__control">
                <label>Название</label>
                <input type="text" onChange={nameChangeHandler} value={name}></input>
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
            </div>
            </div>
    </form>
    }
    export default CostForm