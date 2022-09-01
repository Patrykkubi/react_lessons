import { useState } from "react";
import { useEffect } from "react";

const EditUserValue = ({ users, userData, editUser, index, name, state, setEditState, sumSalary }) => {
  const [newValue, setNewValue] = useState();

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
            console.log(state);
          }}
        >
          {userData}
        </td>
      ) : (
        <td
          onClick={(e) => {
            //setEditState(0);
            //checkState(state);
            setNewValue(userData);
            console.log(state);
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

//react hook form
