import { useState } from "react";
import { useContext } from "react";
import SortTable from "./SortTable";
import DeleteUserBtn from "./DeleteUserBtn";
import TableStatsSummary from "./TableStatsSummary";
import EditUserValue from "./EditUserValue";
import EditUserSkills from "./EditUserSkills";
import AddSkillBtn from "./AddSkillBtn";
import TableContext from "./TableContext";

function DisplayTable() {
  const [editState, setEditState] = useState(0);
  const { usersData } = useContext(TableContext);

  if (typeof usersData === "undefined") {
    return (
      <div className="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Imie</th>
              <th>Nazwisko</th>
              <th>Wynagrodzenie</th>
              <th>Lista_umiejetnosci</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
  return (
    <div className="tableWrapper">
      <table>
        <thead>
          <tr>
            <th>Imie</th>
            <th>Nazwisko</th>
            <SortTable usersData={usersData} />
            <th>Lista_umiejetnosci</th>
          </tr>
        </thead>
        {usersData.map((user, index) => {
          return (
            <tbody key={index}>
              <tr>
                <EditUserValue users={usersData} userData={user.name} index={index} name="name" state={editState} setEditState={setEditState} />
                <EditUserValue users={usersData} userData={user.surname} index={index} name="surname" state={editState} setEditState={setEditState} />
                <EditUserValue users={usersData} userData={user.salary} index={index} name="salary" state={editState} setEditState={setEditState} />
                <td className="skills">
                  {Object.keys(user.skills).map((skill) => (
                    <EditUserSkills users={usersData} userData={user} index={index} skill={skill} state={editState} setEditState={setEditState} />
                  ))}
                  <AddSkillBtn userData={user} index={index} state={editState} setEditState={setEditState} />
                </td>
                <td>
                  <DeleteUserBtn index={index} />
                </td>
              </tr>
            </tbody>
          );
        })}
        <TableStatsSummary users={usersData} />
      </table>
    </div>
  );
}

export default DisplayTable;
