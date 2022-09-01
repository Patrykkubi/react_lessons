import { useState } from "react";
import { useEffect } from "react";
import DeleteAllUsersButton from "./DeleteAllUsersButton";

const FourthTask = ({ users, deleteAllUsers, sumUserSkills, sumSalary, salarySum, skillNames }) => {
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
        <DeleteAllUsersButton deleteAllUsers={deleteAllUsers} />
      </tr>
    </tfoot>
  );
};

export default FourthTask;
