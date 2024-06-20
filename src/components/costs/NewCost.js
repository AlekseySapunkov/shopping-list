import "./NewCost.css"
import CostForm  from "./CostForm"
import React, {useState} from "react"
const NewCost = (props) => {
  const [value, setValue] = useState(props.value);
  const [isFormVisible, setFormVisible] = useState(false)
    console.log(props)
    const onSaveCostHandler =(inputCostData=0)=>{
      if(inputCostData ===0){
        setValue(true);
        setFormVisible(false);
        return
      }
      const costData ={
        ...inputCostData,
        id: Math.random().toString(),
      };
      setValue(true);
      setFormVisible(false);
      props.onAddCost(costData)
    }
    const cancelHandler =()=>{
      setFormVisible(false)
    }
  const buttonClickHandler =(event)=>{
    event.target.value = false;
    setValue(false)
    setFormVisible(true)
  }
  if(value === true && isFormVisible === false){
    return <div className="new-cost">
  <button type ="button" onClick={buttonClickHandler} value = {value}>Добавить новый расход</button>
</div>
}else{
  return <div className="new-cost">
      <CostForm onSaveCost={onSaveCostHandler} costFormValue={cancelHandler}></CostForm>
      </div>
  }
}

export default NewCost