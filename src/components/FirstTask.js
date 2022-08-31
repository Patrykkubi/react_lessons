import { useState } from "react";
import { useEffect } from "react";
import SortTable from "./SortTable";
import DeleteUserButton from "./DeleteUserButton";
import FourthTask from "./FourthTask";

function FirstTask({ users, deleteUser, deleteAllUsers, sortBySalary }) {
  const [editedValue, setEditedValue] = useState();
  const [newValue, setNewValue] = useState();
  const [newSkillName, setNewSkillName] = useState();
  const [newSkillValue, setNewSkillValue] = useState();

  const editUser = (e, index, name) => {
    e.preventDefault();
    users[index][name] = newValue;
  };

  const editUserSkills = (e, index) => {
    e.preventDefault();
    console.log(newSkillValue);
    users[index].skills[newSkillName] = newSkillValue;
  };

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
                <td
                  onClick={(e) => {
                    setEditedValue(index + user.name);
                    setNewValue(user.surname);
                  }}
                >
                  {editedValue == index + user.name ? (
                    <>
                      <form>
                        <input onChange={(e) => setNewValue(e.target.value)} defaultValue={user.name} type="text" name="name" id="name" />
                        <input type="submit" onClick={(e) => editUser(e, index, "name")} />
                      </form>
                    </>
                  ) : (
                    user.name
                  )}
                </td>
                <td
                  onClick={(e) => {
                    setEditedValue(index + user.surname);
                    setNewValue(user.surname);
                  }}
                >
                  {editedValue == index + user.surname ? (
                    <>
                      <form>
                        <input onChange={(e) => setNewValue(e.target.value)} defaultValue={newValue} type="text" name="surname" id="surname" />
                        <input type="submit" onClick={(e) => editUser(e, index, "surname")} />
                      </form>
                    </>
                  ) : (
                    user.surname
                  )}
                </td>
                <td onClick={(e) => setEditedValue(index + user.salary)}>
                  {editedValue == index + user.salary ? (
                    <>
                      <form>
                        <input onChange={(e) => setNewValue(e.target.value)} defaultValue={user.salary} type="number" name="salary" id="salary" />
                        <input type="submit" onClick={(e) => editUser(e, index, "salary")} />
                      </form>
                    </>
                  ) : (
                    user.salary
                  )}
                </td>
                <td>
                  <ol>
                    {Object.keys(user.skills).map((skill) => {
                      return (
                        //<li onClick = {(e) => editUser(index) }>{skill}</li>
                        <li
                          onClick={(e) => {
                            setEditedValue(index);
                            setNewSkillName(skill);
                            setNewSkillValue(user.skills[skill]);
                          }}
                        >
                          {editedValue == index ? (
                            <>
                              <form>
                                <input onChange={(e) => setNewSkillName(e.target.value)} defaultValue={skill} type="text" name="skill" id="skill" />
                                <input onChange={(e) => setNewSkillValue(e.target.value)} defaultValue={user.skills[skill]} type="text" name="skillValue" id="skillValue" />
                                <input type="submit" onClick={(e) => editUserSkills(e, index)} />
                              </form>
                            </>
                          ) : (
                            skill + ": " + user.skills[skill]
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </td>
                <td>
                  <DeleteUserButton deleteUser={deleteUser} index={index} />
                </td>
              </tr>
            </tbody>
          );
        })}
        <FourthTask users={users} deleteAllUsers={deleteAllUsers} />
      </table>
    </div>
  );
}

export default FirstTask;
