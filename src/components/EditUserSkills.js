import { useState } from "react";
import { useEffect } from "react";

const EditUserSkills = ({ userData, index }) => {
  const [newSkillName, setNewSkillName] = useState();
  const [newSkillValue, setNewSkillValue] = useState();
  const [editedSkillValue, setEditedSkillValue] = useState();

  const editUserSkills = (e, index) => {
    e.preventDefault();
    userData[index].skills[newSkillName] = newSkillValue;
  };

  return (
    <td>
      <ol>
        {Object.keys(userData.skills).map((skill) => {
          return (
            <li
              onClick={(e) => {
                setEditedSkillValue(index);
                setNewSkillName(skill);
                setNewSkillValue(userData.skills[skill]);
              }}
            >
              {editedSkillValue == index ? (
                <>
                  <form>
                    <input onChange={(e) => setNewSkillName(e.target.value)} defaultValue={skill} type="text" name="skill" id="skill" />
                    <input onChange={(e) => setNewSkillValue(e.target.value)} defaultValue={userData.skills[skill]} type="text" name="skillValue" id="skillValue" />
                    <input type="submit" onClick={(e) => editUserSkills(e, index)} />
                  </form>
                </>
              ) : (
                skill + ": " + userData.skills[skill]
              )}
            </li>
          );
        })}
      </ol>
    </td>
  );
};

export default EditUserSkills;
