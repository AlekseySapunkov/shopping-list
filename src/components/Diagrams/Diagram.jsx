import DiagramBar  from "./DiagramBar";
import "./Diagram.css"
const Diagram = (props)=> {
    const costPriceArr= props.dataSets.map(dataSet => dataSet.value)
    const maxMonthCost = Math.max(...costPriceArr)
return (<div className="diagram">
    {props.dataSets.map(dataSet => <DiagramBar
    key ={dataSet.label}
    value={dataSet.value}
    maxValue ={maxMonthCost}
    label={dataSet.label}
    />)}
    </div>)
}
export default Diagram;