import { useState } from "react";
import { useEffect } from "react";
import DeleteAllUsersButton from "./DeleteAllUsersButton";

const FourthTask = ({ users, deleteAllUsers }) => {
  const [salarySum, setSalarySum] = useState();
  const [skillNames, setSkillNames] = useState({});
  let skillOccurance = {};

  const sumSalary = (users) => {
    let usersCopy = [...users];
    const salarySum = usersCopy.reduce((prev, curr) => {
      return parseInt(prev) + parseInt(curr.salary);
    }, 0);
    setSalarySum(salarySum);
  };

  const sumUserSkills = (users) => {
    const keyValue = [];
    users.map((users) => {
      Object.keys(users.skills).forEach((newValue, index) => {
        if (!keyValue.includes(newValue)) {
          keyValue.push(newValue);
          skillOccurance[newValue] = 1;
        } else {
          skillOccurance[newValue] = skillOccurance[newValue] + 1;
        }
      });
    });
    setSkillNames(skillOccurance);
  };

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
