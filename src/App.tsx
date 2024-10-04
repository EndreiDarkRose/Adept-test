import "./App.scss";
import CompanyTable from "./app/features/company/components/CompanyTable";
import CompanyForm from "./app/features/company/components/CompanyForm";
import ControlPanel from "./app/features/company/ui/ControlPanel";

function App() {
  return (
    <div className="App">
      <CompanyForm />
      <CompanyTable />
      <ControlPanel />
    </div>
  );
}

export default App;
