import { useState } from "react";

const AddSkillBtn = ({ userData, index, state, setEditState, addSkill }) => {
  const [newSkillName, setNewSkillName] = useState();
  const [newSkillValue, setNewSkillValue] = useState();

  return (
    <>
      {state != index + "#0000cc" ? (
        <button
          onClick={(e) => {
            setEditState(index + "#0000cc");
          }}
        >
          Add skill
        </button>
      ) : (
        <td onClick={(e) => {}}>
          <form>
            Skill name:
            <input onChange={(e) => setNewSkillName(e.target.value)} type="text" name="skillName" id="skillName" />
            Skill value:
            <input onChange={(e) => setNewSkillValue(e.target.value)} type="number" name="skillValue" id="skillValue" />
            <input
              type="submit"
              onClick={(e) => {
                addSkill(e, index, newSkillName, newSkillValue);
                setEditState(0);
              }}
            />
          </form>
        </td>
      )}
    </>
  );
};

export default AddSkillBtn;
