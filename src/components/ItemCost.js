import "./ItemCost.css";
function ItemCost() {
  const costDate = new Date(2024, 4, 9);
  const costTitle = 120;
  return (
    <div className="cost-item">
      <div>{costDate.toDateString()}</div>
      <div className="cost-item__description">
        <h2>Холодильник</h2>
        <div className="cost-item__price">{costTitle }</div>
      </div>
    </div>
  );
}
export default ItemCost;
