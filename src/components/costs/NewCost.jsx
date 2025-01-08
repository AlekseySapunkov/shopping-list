import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState, useEffect } from "react";
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
    console.log(props.value);
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
    console.log(props.value);
  };

  const buttonClickHandler = () => {
    console.log(props.value);
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
          onSaveCost={onSaveCostHandler}
          costFormValue={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
