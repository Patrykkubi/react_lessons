import { useState } from "react";
import { useEffect } from "react";

const Form = ({ updateUsers }) => {
  //const [1 zmienna to tablica z naszymi danymi, 2 to funkcja ktora updatuje wartosci forma]
  const [skillName, setSkillName] = useState("");
  const [skillValue, setSkillValue] = useState("");

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
    // console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    updateUsers(formData);

    setFormData({ ...formData, skills: {} });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} type="text" name="name" id="name" />
      <label htmlFor="body">Surname</label>
      <input onChange={(e) => setFormData({ ...formData, surname: e.target.value })} value={formData.surname} type="text" name="surname" id="surname" />
      <label htmlFor="title">Salary</label>
      <input onChange={(e) => setFormData({ ...formData, salary: e.target.value })} value={formData.salary} type="text" name="salary" id="salary" />

      <label htmlFor="skillName">Skill Name</label>
      <input onChange={(e) => setSkillName(e.target.value)} value={skillName} type="text" name="skillName" id="skillName" />
      <label htmlFor="body">Skill Value</label>
      <input onChange={(e) => setSkillValue(e.target.value)} value={skillValue} type="number" name="skillValue" id="skillValue" />
      <input onClick={(e) => addSkills(e)} type="button" value="Dodaj umiejetnosc" />

      <input type="submit" value="Dodaj uzytkownika" />
    </form>
  );
};

export default Form;