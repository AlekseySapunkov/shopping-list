import "./NewCost.css"
import CostForm  from "./CostForm"
const NewCost = (props) => {
    console.log(props)
    const onSaveCostHandler =(inputCostData)=>{
      const costData ={
        ...inputCostData,
        id: Math.random().toString(),
      };
      props.onAddCost(costData)
    }
return <div className="new-cost">
    <CostForm onSaveCost={onSaveCostHandler}></CostForm>
</div>
}
export default NewCost