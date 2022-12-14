import { useContext, useState } from "react";
import { useEffect } from "react";
import TableContext from "./TableContext";

const EditUserSkills = ({ users, userData, index, skill, state, setEditState }) => {
  const [newSkillName, setNewSkillName] = useState();
  const [newSkillValue, setNewSkillValue] = useState();

  const { sumUserSkills } = useContext(TableContext);
  const { editSkills } = useContext(TableContext);
  const { deleteSkill } = useContext(TableContext);

  useEffect(() => {
    sumUserSkills(users);
  }, [users[index].skills[newSkillName]]);

  return (
    <>
      {state != index + skill ? (
        <ul>
          <li
            onClick={(e) => {
              setEditState(index + skill);
              setNewSkillName(skill);
              setNewSkillValue(userData.skills[skill]);
            }}
          >
            {skill + ": " + userData.skills[skill]}
          </li>
        </ul>
      ) : (
        <td
          onClick={(e) => {
            setNewSkillName(skill);
            setNewSkillValue(userData.skills[skill]);
          }}
        >
          <form>
            {newSkillName}
            <input onChange={(e) => setNewSkillValue(e.target.value)} defaultValue={newSkillValue} type="number" name={userData.skills[skill]} id="name" />
            <input
              type="submit"
              onClick={(e) => {
                editSkills(e, index, newSkillName, newSkillValue);
                setEditState(0);
              }}
            />
            <button
              onClick={(e) => {
                deleteSkill(e, index, newSkillName);
                sumUserSkills(users);
                setEditState(0);
              }}
            >
              X
            </button>
          </form>
        </td>
      )}
    </>
  );
};

export default EditUserSkills;
