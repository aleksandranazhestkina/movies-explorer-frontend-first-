import "./FilterCheckbox.css";
import React from "react";

export default function FilterCheckbox() {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleChangeCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="filter">
      <span className="filter__text">Короткометражки</span>
      <input
        className={`filter__checkbox ${isChecked ? "filter__checkbox_checked" : ""}`}
        type="checkbox"
        value={isChecked}
        onChange={handleChangeCheck}
      />
    </label>
  );
}
