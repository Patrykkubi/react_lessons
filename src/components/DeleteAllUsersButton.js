import { useContext } from "react";
import TableContext from "./TableContext";

const DeleteAllUsersButton = () => {
  const {deleteAllUsers} = useContext(TableContext);

  const delAllUsers = () => {
    const warning = window.confirm("Are you sure you want to delete all the data ?");
    if (warning) {
      deleteAllUsers();
    }
  };

  return (
    <button
      onClick={(e) => {
        delAllUsers();
      }}
    >
      Delete All Users
    </button>
  );
};

export default DeleteAllUsersButton;
