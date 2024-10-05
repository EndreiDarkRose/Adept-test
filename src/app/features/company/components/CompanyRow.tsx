import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCompany, toggleSelect } from "../../../redux/companySlice";
import { Company } from "../../../types";

type CompanyRowProps = {
  company: Company;
  rowHeight: number;
};

const CompanyRow: React.FC<CompanyRowProps> = ({ company, rowHeight }) => {
  const dispatch = useDispatch();

  const [editableName, setEditableName] = useState(company.name);
  const [editableAddress, setEditableAddress] = useState(company.address);

  const handleUpdateCompany = () => {
    dispatch(
      updateCompany({
        ...company,
        name: editableName,
        address: editableAddress,
      })
    );
  };

  return (
    <tr
      style={{
        background: company.selected ? "#f0f0f0" : "transparent",
        height: rowHeight,
      }}
    >
      <td>
        <input
          className="ui-checkbox"
          type="checkbox"
          checked={company.selected}
          onChange={() => dispatch(toggleSelect(company.id))}
        />
      </td>
      <td>
        <input
          className="companyRow"
          type="text"
          value={editableName}
          onChange={(e) => setEditableName(e.target.value)}
          onBlur={handleUpdateCompany}
        />
      </td>
      <td>
        <input
          className="companyRow"
          type="text"
          value={editableAddress}
          onChange={(e) => setEditableAddress(e.target.value)}
          onBlur={handleUpdateCompany}
        />
      </td>
    </tr>
  );
};

export default CompanyRow;
