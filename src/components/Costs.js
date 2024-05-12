import ItemCost from "./ItemCost";
import "./costs.css";
function Costs(){
    return (
        <div className="costs"> <ItemCost
        date={costs[0].date}
        description={costs[0].description}
        price={costs[0].price}
      ></ItemCost>
      <ItemCost
        date={costs[0].date}
        description={costs[1].description}
        price={costs[1].price}
      ></ItemCost>
      <ItemCost
        date={costs[0].date}
        description={costs[2].description}
        price={costs[2].price}
      ></ItemCost>
      </div>
       
    )
}
export default Costs();