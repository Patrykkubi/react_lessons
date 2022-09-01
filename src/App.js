import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FirstTask from "./components/FirstTask";
import Form from "./components/Form";
export default App;

const users = [
  {
    name: "Bartosz",
    surname: "Władyka",
    skills: {
      php: 4,
      js: 6,
    },
    salary: 2800,
  },
  {
    name: "Patryk",
    surname: "Kubicki",
    skills: {
      php: 8,
      js: 2,
    },
    salary: 2300,
  },
  {
    name: "Jędrzej",
    surname: "Burczak",
    skills: {
      php: 3,
      js: 7,
    },
    salary: 1000,
  },
  {
    name: "Karol",
    surname: "Jezierski",
    skills: {
      php: 2,
      js: 8,
    },
    salary: 2500,
  },
  {
    name: "Piotr",
    surname: "Kozera",
    skills: {
      php: 6,
      js: 6,
    },
    salary: 2100,
  },
  {
    name: "Grzegorz",
    surname: "Szukalski",
    skills: {
      php: 10,
      system: 10,
      js: 2,
    },
    salary: 25000,
  },
  {
    name: "Piotr",
    surname: "Piska",
    skills: {
      php: 2,
      js: 10,
      ts: 10,
    },
    salary: 15000,
  },
];

// Task 1
// Wyświetl listę userów w tabeli
// Lista powinna pokazywać:
// Imię, nazwisko, wynagordzenie, umiejętności wypisane w formie listy punktowanej

// Task 2
// Dodaj mozliwość dodawania nowych userów do tabeli
// Wykonaj formularz, który:
// Będzie zbierał informacje - imie, nazwisko, wynagrodzenie, skillsy
// Skillsy muszą posiadać mozliwość podania nazwy skilla i jego wartości
// Po kliknięciu w przycisk wysyłania danych lista powinna się zaktualizować o nowy rekord

// Task 3
// Dodaj mozliwość usuwania rekordów z listy userów
// Opcjonalnie: Dobrze by było gdyby user musiał potwierdzić usunięcie rekordu

// Task 4
// Przy uycia hooka useEffect przygotuj mechanizm sumowania wypłat, skillów (ile mamy userów np. znających php, ile js etc.)
// Wyświetl ponizej tabeli podsumowanie obliczen

// Task 5
// Dodaj mechanizm edycji istniejącego rekordu

// Task 6
// Dodaj przycisk do czyszczenia całej listy
// Must have - alert

// Task 7
// Dodaj mozliwosc sortowania tablicy po wypłacie rosnąco / malejąco / wyłaczenie

function App() {
  const [usersData, setUsersData] = useState(users);
  const [unsortedUsers, setUnsortedUsers] = useState(users);

  const updateUsers = (data) => {
    let newUsersData = [...usersData, data];
    setUsersData(newUsersData);
    setUnsortedUsers(newUsersData);
  };

  const deleteUser = (index) => {
    const newUsersData = usersData.filter((user, i) => {
      return i !== index;
    });
    setUsersData(newUsersData);
    setUnsortedUsers(newUsersData);
  };

  const deleteAllUsers = () => {
    setUsersData([]);
  };

  const sortBySalary = (status) => {
    if (status == 1) {
      let ascUser = [];
      // setUsersData(usersData.sort(function (a, b) {  return a.salary - b.salary;  }));
      ascUser = usersData.slice().sort(function (a, b) {
        return a.salary - b.salary;
      });
      setUsersData(ascUser);
    } else if (status == 2) {
      let descUser = [];
      //setUsersData(usersData.sort(function (a, b) {  return a.salary + b.salary;  }));
      descUser = usersData.slice().sort(function (a, b) {
        return b.salary - a.salary;
      });
      setUsersData(descUser);
    } else {
      setUsersData(unsortedUsers);
    }
  };

  const editUser = (e, index, newValue, key) => {
    e.preventDefault();
    usersData[index][key] = newValue;
    //setEditedValue();
  };

  const editSkills = (e, index, newSkillName, newSkillValue) => {
    e.preventDefault();
    usersData[index].skills[newSkillName] = newSkillValue;
    console.log(usersData);
  };

  const deleteSkill = (e, index, skillName) => {
    e.preventDefault();
    delete usersData[index].skills[skillName];
  };

  const addSkill = (e, index, skillName, skillValue) => {
    e.preventDefault();
    if (!(skillName in usersData[index].skills)) {
      usersData[index].skills[skillName] = skillValue;
    } else {
      alert("This skill already exists");
    }
  };

  const [salarySum, setSalarySum] = useState();
  const [skillNames, setSkillNames] = useState({});
  let skillOccurance = {};

  const sumSalary = (users) => {
    let usersCopy = [...users];
    const salarySum = usersCopy.reduce((prev, curr) => {
      return parseInt(prev) + parseInt(curr.salary);
    }, 0);
    setSalarySum(salarySum);
  };

  const sumUserSkills = (users) => {
    const keyValue = [];
    users.map((users) => {
      Object.keys(users.skills).forEach((newValue, index) => {
        if (!keyValue.includes(newValue)) {
          keyValue.push(newValue);
          skillOccurance[newValue] = 1;
        } else {
          skillOccurance[newValue] = skillOccurance[newValue] + 1;
        }
      });
    });
    setSkillNames(skillOccurance);
  };

  return (
    <div className="App">
      <FirstTask
        salarySum={salarySum}
        skillNames={skillNames}
        sumSalary={sumSalary}
        sumUserSkills={sumUserSkills}
        users={usersData}
        deleteUser={deleteUser}
        deleteAllUsers={deleteAllUsers}
        sortBySalary={sortBySalary}
        editUser={editUser}
        editSkills={editSkills}
        deleteSkill={deleteSkill}
        addSkill={addSkill}
      />
      <Form updateUsers={updateUsers} />
    </div>
  );
}
