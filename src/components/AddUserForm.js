import { useState } from "react";
import { useContext } from "react";
import TableContext from "./TableContext";

const AddUserForm = () => {
  const { updateUsers } = useContext(TableContext);

  const [skillName, setSkillName] = useState("");
  const [skillValue, setSkillValue] = useState("");
  const [userSkillNames, setUserSkillNames] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    salary: "",
    skills: {},
  });

  const addSkills = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      skills: {
        ...formData.skills,
        [skillName]: skillValue,
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUsers(formData);
    setUserSkillNames([]);
    setFormData({ ...formData, skills: {} });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} type="text" name="name" id="name" required />
        <label htmlFor="body">Surname</label>
        <input onChange={(e) => setFormData({ ...formData, surname: e.target.value })} value={formData.surname} type="text" name="surname" id="surname" required />
        <label htmlFor="title">Salary</label>
        <input onChange={(e) => setFormData({ ...formData, salary: e.target.value })} value={formData.salary} type="number" name="salary" id="salary" required />

        <label htmlFor="skillName">Skill Name</label>
        <input onChange={(e) => setSkillName(e.target.value)} value={skillName} type="text" name="skillName" id="skillName" />
        <label htmlFor="body">Skill Value</label>
        <input onChange={(e) => setSkillValue(e.target.value)} value={skillValue} type="number" name="skillValue" id="skillValue" />
        <input
          onClick={(e) => {
            addSkills(e);
            setUserSkillNames([...userSkillNames, skillName + ": " + skillValue + " "]);
          }}
          type="button"
          value="Dodaj umiejetnosc"
        />
        <input type="submit" value="Dodaj uzytkownika" />
      </form>
      <p>{userSkillNames}</p>
    </>
  );
};

export default AddUserForm;
