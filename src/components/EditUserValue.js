import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import TableContext from "./TableContext";

const EditUserValue = ({ users, userData, index, name, state, setEditState }) => {
  const [newValue, setNewValue] = useState();

  const { editUser } = useContext(TableContext);
  const { sumSalary } = useContext(TableContext);

  useEffect(() => {
    sumSalary(users);
  }, [users[index].salary]);

  return (
    <>
      {state != index + userData ? (
        <td
          onClick={(e) => {
            setEditState(index + userData);
            setNewValue(userData);
          }}
        >
          {userData}
        </td>
      ) : (
        <td
          onClick={(e) => {
            setNewValue(userData);
          }}
        >
          <form>
            <input onChange={(e) => setNewValue(e.target.value)} defaultValue={newValue} type={name == "salary" ? "number" : "text"} name={name} id="name" />
            <input
              type="submit"
              onClick={(e) => {
                editUser(e, index, newValue, name);
                setEditState();
              }}
            />
          </form>
        </td>
      )}
    </>
  );
};

export default EditUserValue;
