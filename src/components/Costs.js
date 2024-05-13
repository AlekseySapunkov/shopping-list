import ItemCost from "./ItemCost";
import "./costs.css";
import Card from "./Card";
function Costs(props){
    return (
        <Card className="costs"> <ItemCost
        date={props.prices[0].date}
        description={props.prices[0].description}
        price={props.prices[0].price}
      ></ItemCost>
      <ItemCost
        date={props.prices[0].date}
        description={props.prices[1].description}
        price={props.prices[1].price}
      ></ItemCost>
      <ItemCost
        date={props.prices[0].date}
        description={props.prices[2].description}
        price={props.prices[2].price}
      ></ItemCost>
      </Card>
       
    )
}
export default Costs;