import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import CompanyRow from "./CompanyRow";
import { selectAll } from "../../../redux/companySlice";

const ROW_HEIGHT = 30;
const VISIBLE_ROWS = 22;

const CompanyTable: React.FC = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const dispatch = useDispatch();

  const [start, setStart] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const allSelected =
    companies.length > 0 && companies.every((company) => company.selected);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAll(e.target.checked));
  };

  function getTopHeight() {
    return ROW_HEIGHT * start;
  }

  function getBottomHeight() {
    return ROW_HEIGHT * (companies.length - (start + VISIBLE_ROWS));
  }

  useEffect(() => {
    function onScroll(e: Event) {
      const scrollTop = (e.target as HTMLDivElement).scrollTop;
      const newStart = Math.min(
        companies.length - VISIBLE_ROWS,
        Math.floor(scrollTop / ROW_HEIGHT)
      );
      setStart(newStart);
    }

    const rootElement = rootRef.current;
    if (rootElement) {
      rootElement.addEventListener("scroll", onScroll);
    }

    return () => {
      if (rootElement) {
        rootElement.removeEventListener("scroll", onScroll);
      }
    };
  }, [companies.length]);

  return (
    <div className="table">
      <div className="headerTable">
        <input
          className="ui-checkbox"
          type="checkbox"
          checked={allSelected}
          onChange={handleSelectAll}
        />
        <p className="company">Company Name</p>
        <p className="address">Address</p>
      </div>

      <div
        ref={rootRef}
        style={{
          height: ROW_HEIGHT * VISIBLE_ROWS,
          width: 390,
          overflowY: "auto",
        }}
      >
        <div style={{ height: getTopHeight() }} />
        <table>
          <tbody>
            {companies.slice(start, start + VISIBLE_ROWS).map((company) => (
              <CompanyRow
                company={company}
                key={company.id}
                rowHeight={ROW_HEIGHT}
              />
            ))}
          </tbody>
        </table>
        <div style={{ height: getBottomHeight() }} />
      </div>
    </div>
  );
};

export default CompanyTable;
