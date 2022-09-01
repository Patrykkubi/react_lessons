import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import SortTable from "./SortTable";
import DeleteUserButton from "./DeleteUserButton";
import FourthTask from "./FourthTask";
import EditUserValue from "./EditUserValue";
import EditUserSkills from "./EditUserSkills";
import AddSkillBtn from "./AddSkillBtn";
import TableContext from "./TableContext";


function FirstTask( ) {
  const [editState, setEditState] = useState(0);
  const {usersData} = useContext(TableContext);
  
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
            <SortTable usersData = {usersData}/>
            <th>Lista_umiejetnosci</th>
          </tr>
        </thead>
        {usersData.map((user, index) => {
          return (
            <tbody key={index}>
              <tr>
                <EditUserValue  users={usersData} userData={user.name} index={index} name="name" state={editState} setEditState={setEditState} />
                <EditUserValue  users={usersData} userData={user.surname} index={index}  name="surname" state={editState} setEditState={setEditState} />
                <EditUserValue  users={usersData} userData={user.salary} index={index}  name="salary" state={editState} setEditState={setEditState} />
                {/* to do edycje skilli i usuwanie skilli a nastepenie refactor z contexty */}
                <td className="skills">
                  {Object.keys(user.skills).map((skill) => (
                    <EditUserSkills users={usersData} userData={user} index={index}  skill={skill} state={editState} setEditState={setEditState}   />
                  ))}
                  <AddSkillBtn userData={user} index={index} state={editState} setEditState={setEditState}  />
                </td>
                <td>
                  <DeleteUserButton index={index} />
                </td>
              </tr>
            </tbody>
          );
        })}
        <FourthTask users={usersData} />
      </table>
    </div>
  );
}

export default FirstTask;
