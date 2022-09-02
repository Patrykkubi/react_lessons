import { useContext, useState } from "react";
import { useEffect } from "react";
import DeleteAllUsersBtn from "./DeleteAllUsersBtn";
import TableContext from "./TableContext";

const TableStatsSummary = ({ users }) => {
  const { skillNames } = useContext(TableContext);
  const { sumUserSkills } = useContext(TableContext);
  const { sumSalary } = useContext(TableContext);
  const { salarySum } = useContext(TableContext);

  useEffect(() => {
    sumUserSkills(users);
    sumSalary(users);
  }, [users]);

  return (
    <tfoot>
      <tr>
        <td colspan="2">Podusmowanie</td>
        <td>suma wynagrodzenia: {salarySum}</td>
        <td>
          lista umiejetnosci:{" "}
          {Object.keys(skillNames).map((skill) => {
            return `${skill}: ${skillNames[skill]}\n`;
          })}
        </td>
        <DeleteAllUsersBtn />
      </tr>
    </tfoot>
  );
};

export default TableStatsSummary;
