const DeleteAllUsersButton = ({ deleteAllUsers }) => {
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
