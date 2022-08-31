const DeleteUserButton = ({ index, deleteUser }) => {
  const delUser = () => {
    deleteUser(index);
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
