import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';
import { useEffect } from 'react';


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


const SortTable = ({sortBySalary}) => {
  const [state, setState] = useState(1);

  const sortTable = () => {
 if (state == 1) {
  sortBySalary(state, users);
 } else if (state == 2){
  sortBySalary(state, users)
 } else if (state == 3){
  sortBySalary(state, users)
  setState(1);
 }
 console.log(state)
}

 return (
<th onClick={(e) => { setState(state + 1); sortTable(); }}>Wynagrodzenie</th>
 );
}

const DeleteAllUsersButton = ({deleteAllUsers}) => {
  const delAllUsers = () =>{
    const warning = window.confirm("Are you sure you want to delete all the data ?");
    if(warning){
      deleteAllUsers();
    } 
  }

  return (
    <button onClick={(e) => {delAllUsers()}}>Delete All Users</button>
  );
}

const FourthTask = ({users, deleteAllUsers}) => {

const [salarySum, setSalarySum] = useState();
const [skillNames, setSkillNames] = useState({});
let skillOccurance = {};

const sumSalary = (users) => {
    let usersCopy = [...users];
    const salarySum = usersCopy.reduce((prev, curr) => {
      return parseInt(prev) + parseInt(curr.salary);
    }, 0);
   setSalarySum(salarySum)
}

const sumUserSkills = (users) => {
  const keyValue = [];
    users.map((users) => {
      Object.keys(users.skills).forEach((newValue, index) => {
      if(!keyValue.includes(newValue)){
        keyValue.push(newValue);
        skillOccurance[newValue] = 1;
       } else {
        skillOccurance[newValue] = skillOccurance[newValue] + 1;
       }
      });
    })
    setSkillNames(skillOccurance)
}

useEffect(()=> {
  sumUserSkills(users);
  sumSalary(users);
},[users])

  return (
    <tfoot>
    <tr>
      <td colspan = "2">
        Podusmowanie 
      </td>
      <td>
        suma wynagrodzenia: {salarySum}
      </td>
      <td>
        lista umiejetnosci: {
        Object.keys(skillNames).map((skill) => {
        return (
                `${skill}: ${skillNames[skill]}\n`  
                );
              })}
      </td>
      <DeleteAllUsersButton deleteAllUsers={deleteAllUsers}/>
    </tr>
  </tfoot>
  );
}

const DeleteUserButton = ({index, deleteUser}) => {
  const delUser = () =>{
    deleteUser(index);
  }

  return (
    <button onClick={(e) => {delUser(index)}}>Delete</button>
  );
}


function FirstTask({ users, deleteUser, deleteAllUsers, sortBySalary}) { 
  const [editedValue,setEditedValue] = useState();
  const [newValue, setNewValue] = useState();
  const [newSkillName, setNewSkillName] = useState();
  const [newSkillValue, setNewSkillValue] = useState();

  const editUser = (e,index,name) => {
    e.preventDefault();
   users[index][name] = newValue;
  }

  const editUserSkills = (e, index) =>{
    e.preventDefault();
    console.log(newSkillValue);
    users[index].skills[newSkillName] = newSkillValue;
  }


  if(typeof users === 'undefined'){
    return (
      <div className="tableWrapper">
      <table>
          <thead>
          <tr>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Wynagrodzenie</th>
            <th>Lista_umiejetnosci</th>
          </tr>
         </thead>
         </table>
         </div>
    );
  }
  return (
    <div className="tableWrapper">
      <table>
          <thead>
          <tr>
            <th>Imie</th>
            <th>Nazwisko</th>
            <SortTable sortBySalary = {sortBySalary}/>
            <th>Lista_umiejetnosci</th>
          </tr>
         </thead>
          { users.map((user, index) => { 
           return (
          <tbody key={index}>
            <tr>
            <td onClick = {(e) => {setEditedValue(index + user.name); setNewValue(user.surname)}}>
                {editedValue==index+user.name 
                ?
                <>
                <form> 
                <input onChange ={(e) => setNewValue(e.target.value)} defaultValue = {user.name} type="text" name="name" id="name" />
                <input type="submit" onClick={(e) => editUser(e,index, 'name')}/>
                </form>
                </>
                : user.name}
             </td>
             <td onClick = {(e) => {setEditedValue(index+user.surname); setNewValue(user.surname)}}>
                {editedValue==index+user.surname
                ?
                <>
                <form> 
                <input onChange ={(e) => setNewValue(e.target.value)} defaultValue = {newValue} type="text" name="surname" id="surname" />
                <input type="submit" onClick={(e) => editUser(e,index, 'surname')}/>
                </form>
                </>
                : user.surname}
             </td>
             <td onClick = {(e) => setEditedValue(index+user.salary)}>
                {editedValue==index+user.salary
                ?
                <>
                <form> 
                <input onChange ={(e) => setNewValue(e.target.value)} defaultValue = {user.salary} type="number" name="salary" id="salary" />
                <input type="submit" onClick={(e) => editUser(e,index, 'salary')}/>
                </form>
                </>
                : user.salary}
             </td>
            <td>
            <ol>
              {Object.keys(user.skills).map((skill) => {
                return (
                   //<li onClick = {(e) => editUser(index) }>{skill}</li>
                <li onClick = {(e) => {setEditedValue(index); setNewSkillName(skill); setNewSkillValue(user.skills[skill]);}}>  
                {editedValue==index
                ?
                  <>
                  <form>
                    <input onChange ={(e) => setNewSkillName(e.target.value)} defaultValue = {skill} type="text" name="skill" id="skill" />
                    <input onChange ={(e) => setNewSkillValue(e.target.value)} defaultValue = {user.skills[skill]} type="text" name="skillValue" id="skillValue"/>
                    <input type="submit" onClick={(e) => editUserSkills(e,index)}/>
                  </form>
                  </>
                  : skill + ": " + user.skills[skill]}
                </li>
                );
              })}
              </ol>
            </td>
            <td>
              <DeleteUserButton deleteUser = {deleteUser} index = {index}/>
            </td>
            </tr>
          </tbody> 
      );
    })}
    <FourthTask users = {users} deleteAllUsers={deleteAllUsers}/>
    </table>
    </div>
  );
}

const Form = ({updateUsers}) => {
    //const [1 zmienna to tablica z naszymi danymi, 2 to funkcja ktora updatuje wartosci forma]
  const [skillName, setSkillName] = useState("");
  const [skillValue, setSkillValue] = useState("");

  const [formData, setFormData] = useState({
      name: "",
      surname: "",
      salary: "",
      skills: {}
    })
 
const addSkills = (e) => {
 e.preventDefault();
 setFormData({...formData, skills: {
  ...formData.skills,
  [skillName]: skillValue
 }})
// console.log(formData)
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData);
  updateUsers(formData)

  setFormData({...formData, skills: {}})
}

  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} type="text" name="name" id="name"/>
      <label htmlFor="body">Surname</label>
      <input onChange={(e) => setFormData({...formData, surname: e.target.value})} value={formData.surname} type ="text" name="surname" id="surname"/>
      <label htmlFor="title">Salary</label>
      <input onChange={(e) => setFormData({...formData, salary: e.target.value})} value={formData.salary} type="text" name="salary" id="salary"/>

      <label htmlFor="skillName">Skill Name</label>
      <input onChange={(e) => setSkillName(e.target.value)} value={skillName} type="text" name="skillName" id="skillName"/>
      <label htmlFor="body">Skill Value</label>
      <input onChange={(e) => setSkillValue(e.target.value)} value={skillValue} type ="number" name="skillValue" id="skillValue"/>
      <input onClick={(e) => addSkills(e)}   type="button" value="Dodaj umiejetnosc"/> 

      <input type="submit" value="Dodaj uzytkownika"/>
    </form>
  )
}



function App() {
  
  const[usersData, setUsersData] = useState(users);
  //const[noSortedData, setNoSortedData] = useState(users);
  const[unsortedUsers, setUnsortedUsers] = useState(users);

  const updateUsers = (data) => {
    let newUsersData = [...usersData, data];
    setUsersData(newUsersData);
    setUnsortedUsers(newUsersData);
  }

  const deleteUser = (index) => {
   const newUsersData = usersData.filter((user, i) => {
      return i!==index
    });
    setUsersData(newUsersData);
    setUnsortedUsers(newUsersData);
  }

  const deleteAllUsers = () => {
    setUsersData([]);
  }

  const sortBySalary = (status) => {
    if(status == 1){
      let ascUser = [];
   // setUsersData(usersData.sort(function (a, b) {  return a.salary - b.salary;  }));
    ascUser = usersData.slice().sort(function (a, b) {  return a.salary - b.salary;  })
    setUsersData(ascUser);
  } else if(status == 2){
    let descUser = [];
    //setUsersData(usersData.sort(function (a, b) {  return a.salary + b.salary;  }));
    descUser = usersData.slice().sort(function (a, b) {  return b.salary - a.salary;  })
    setUsersData(descUser);
  } else {
    setUsersData(unsortedUsers);
  }
  }

  return (
    <div className="App">
      <FirstTask users = {usersData} deleteUser= {deleteUser} deleteAllUsers = {deleteAllUsers} sortBySalary = {sortBySalary}/>
      <Form updateUsers = {updateUsers}/>
    </div>
  );
}