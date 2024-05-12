import ItemCost from "./ItemCost";
import "./costs.css";
function Costs(props){
    return (
        <div className="costs"> <ItemCost
        date={props.costs[0].date}
        description={props.costs[0].description}
        price={props.costs[0].price}
      ></ItemCost>
      <ItemCost
        date={props.costs[0].date}
        description={props.costs[1].description}
        price={props.costs[1].price}
      ></ItemCost>
      <ItemCost
        date={props.costs[0].date}
        description={props.costs[2].description}
        price={props.costs[2].price}
      ></ItemCost>
      </div>
       
    )
}
export default Costs();