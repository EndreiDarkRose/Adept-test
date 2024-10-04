import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialCompanies from "../helpers/initialCompanies";

type Company = {
  id: number;
  name: string;
  address: string;
  selected: boolean;
};

type CompanyState = {
  companies: Company[];
};

const initialState: CompanyState = {
  companies: initialCompanies,
};

const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push(action.payload);
    },
    removeCompanies: (state) => {
      state.companies = state.companies.filter((company) => !company.selected);
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      const index = state.companies.findIndex(
        (c) => c.id === action.payload.id
      );
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
    toggleSelect: (state, action: PayloadAction<number>) => {
      const index = state.companies.findIndex((c) => c.id === action.payload);
      if (index !== -1) {
        state.companies[index].selected = !state.companies[index].selected;
      }
    },
    selectAll: (state, action: PayloadAction<boolean>) => {
      state.companies.forEach((company) => {
        company.selected = action.payload;
      });
    },
  },
});

export const {
  addCompany,
  removeCompanies,
  updateCompany,
  toggleSelect,
  selectAll,
} = companySlice.actions;

export default companySlice.reducer;
