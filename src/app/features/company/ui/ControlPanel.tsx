import React from "react";
import { useDispatch } from "react-redux";
import { removeCompanies } from "../../../redux/companySlice";

const ControlPanel: React.FC = () => {
  const dispatch = useDispatch();

  const handleRemoveSelected = () => {
    dispatch(removeCompanies());
  };

  return (
    <div className="removeButton">
      <button onClick={handleRemoveSelected}>Remove Selected</button>
    </div>
  );
};

export default ControlPanel;
