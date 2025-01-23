import "./CostsFilter.css";
const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label htmlFor="dropdown-choice-year">Выбор По Году</label>
        <select id="dropdown-choice-year" value={props.year} onChange={yearChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
