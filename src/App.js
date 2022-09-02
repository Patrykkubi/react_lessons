import "./App.css";
import DisplayTable from "./components/DisplayTable";
import AddUserForm from "./components/AddUserForm";
import { TableProvider } from "./components/TableContext";
import React from "react";

function App() {
  return (
    <TableProvider>
      <div className="App">
        <DisplayTable />
        <AddUserForm />
      </div>
    </TableProvider>
  );
}

export default App;
