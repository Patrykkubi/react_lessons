import { useState } from "react";
import SortTable from "./SortTable";
import DeleteUserButton from "./DeleteUserButton";
import FourthTask from "./FourthTask";
import EditUserValue from "./EditUserValue";
import EditUserSkills from "./EditUserSkills";
import AddSkillBtn from "./AddSkillBtn";

function FirstTask({ users, deleteUser, deleteAllUsers, sortBySalary, editUser, editSkills, deleteSkill, addSkill, skillNames, salarySum, sumUserSkills, sumSalary }) {
  const [editState, setEditState] = useState(0);
  if (typeof users === "undefined") {
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
            <SortTable sortBySalary={sortBySalary} users={users} />
            <th>Lista_umiejetnosci</th>
          </tr>
        </thead>
        {users.map((user, index) => {
          return (
            <tbody key={index}>
              <tr>
                <EditUserValue userData={user.name} index={index} editUser={editUser} name="name" state={editState} setEditState={setEditState} />
                <EditUserValue userData={user.surname} index={index} editUser={editUser} name="surname" state={editState} setEditState={setEditState} />
                <EditUserValue userData={user.salary} index={index} editUser={editUser} name="salary" state={editState} setEditState={setEditState} />
                {/* to do edycje skilli i usuwanie skilli a nastepenie refactor z contexty */}
                <td>
                  {Object.keys(user.skills).map((skill) => (
                    <EditUserSkills sumUserSkills={sumUserSkills} skillNames={skillNames} users={users} userData={user} index={index} editUser={editUser} skill={skill} state={editState} setEditState={setEditState} editSkills={editSkills} deleteSkill={deleteSkill} />
                  ))}
                  <AddSkillBtn addSkill={addSkill} userData={user} index={index} editUser={editUser} state={editState} setEditState={setEditState} editSkills={editSkills} />
                </td>
                <td>
                  <DeleteUserButton deleteUser={deleteUser} index={index} />
                </td>
              </tr>
            </tbody>
          );
        })}
        <FourthTask skillNames={skillNames} salarySum={salarySum} sumUserSkills={sumUserSkills} sumSalary={sumSalary} state={editState} setEditState={setEditState} users={users} deleteAllUsers={deleteAllUsers} />
      </table>
    </div>
  );
}

export default FirstTask;
