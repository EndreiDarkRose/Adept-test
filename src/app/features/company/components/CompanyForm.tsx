import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCompany } from "../../../redux/companySlice";

const CompanyForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const handleAddCompany = () => {
    const newCompany = {
      id: Date.now(),
      name,
      address,
      selected: false,
    };
    dispatch(addCompany(newCompany));
    setName("");
    setAddress("");
  };

  return (
    <div className="addCompany">
      <input
        type="text"
        placeholder="Company Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleAddCompany}>Add Company</button>
    </div>
  );
};

export default CompanyForm;
