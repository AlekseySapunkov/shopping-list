import "./NewCost.css"
import CostForm  from "./CostForm"
const NewCost = () => {
    const onSaveCostHandler =(inputCostData)=>{
        console.log(inputCostData);
    }
return <div className="new-cost">
    <CostForm onSaveCost={onSaveCostHandler}></CostForm>
</div>
}
export default NewCost