import { useState } from "react";
import { useEffect } from "react";

const SortTable = ({ sortBySalary, users }) => {
  const [state, setState] = useState(1);

  const sortTable = () => {
    if (state == 1) {
      sortBySalary(state, users);
    } else if (state == 2) {
      sortBySalary(state, users);
    } else if (state == 3) {
      sortBySalary(state, users);
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
