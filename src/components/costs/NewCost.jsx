import "./NewCost.css";
import CostForm from "./CostForm";
import { useState, useEffect } from "react";
import Button from "./Button";

const NewCost = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);

  // Synchronize local state with props.value
  useEffect(() => {
    if (props.value === true) {
      setFormVisible(false);
    } else {
      setFormVisible(true);
    }
    // Reset form visibility when value changes
  }, [props.value]);

  const onSaveCostHandler = (inputCostData) => {
    if (!inputCostData) {
      setFormVisible(false);
      return;
    }

    const costData = {
      ...inputCostData,
    };

    setFormVisible(false);
    props.onAddCost(costData);
  };

  const cancelHandler = () => {
    setFormVisible(false);
    props.resetData();
    props.onCancelHandler();
  };

  const buttonClickHandler = () => {
    props.resetData();
    setFormVisible(true);
  };
  return (
    <div className="new-cost">
      {!isFormVisible ? (
        <Button type="button" onClick={buttonClickHandler}>
          Добавить новый расход
        </Button>
      ) : (
        <CostForm
          data={props.data}
          onSaveCost={onSaveCostHandler}
          costFormValue={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
