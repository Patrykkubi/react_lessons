import { useContext, useState } from "react";
import TableContext from "./TableContext";

const AddSkillBtn = ({ index, state, setEditState }) => {
  const [newSkillName, setNewSkillName] = useState();
  const [newSkillValue, setNewSkillValue] = useState();

  const { addSkill } = useContext(TableContext);
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
                setNewSkillName();
                setNewSkillValue();
              }}
            />
          </form>
        </td>
      )}
    </>
  );
};

export default AddSkillBtn;
