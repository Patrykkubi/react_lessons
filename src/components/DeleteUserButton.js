const DeleteUserButton = ({ index, deleteUser }) => {
  const delUser = () => {
    const warning = window.confirm("Are you sure you want to delete this user ?");
    if (warning) {
      deleteUser(index);
    }
  };
  return (
    <button
      onClick={(e) => {
        delUser(index);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteUserButton;
