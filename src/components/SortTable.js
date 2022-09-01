import { useContext, useState } from "react";
import { useEffect } from "react";
import TableContext from "./TableContext";

const SortTable = ({usersData}) => {

const {sortBySalary} = useContext(TableContext);
const [state, setState] = useState(1);

  const sortTable = () => {
    if (state == 1) {
      sortBySalary(state, usersData);
    } else if (state == 2) {
      sortBySalary(state, usersData);
    } else if (state == 3) {
      sortBySalary(state, usersData);
      setState(1);
    }
  };

  return (
    <th
      onClick={(e) => {
        setState(state + 1);
        sortTable();
      }}
    >
      Wynagrodzenie
    </th>
  );
};

export default SortTable;
