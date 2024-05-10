import "./ItemCost.css";
function ItemCost(props) {
  const costDate = props.date;
  const costTitle = props.price;
  const title = props.description;
  return (
    <div className="cost-item">
      <div>{costDate.toDateString()}</div>
      <div className="cost-item__description">
        <h2>{title}</h2>
        <div className="cost-item__price">{costTitle}</div>
      </div>
    </div>
  );
}
export default ItemCost;
