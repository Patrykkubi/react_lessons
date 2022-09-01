import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FirstTask from "./components/FirstTask";
import Form from "./components/Form";
//import {TableContext, TableProvider} from "./components/TableContext";
import { useContext } from "react";
import { TableProvider } from "./components/TableContext";
import React from "react";
import TableContext from "./components/TableContext";

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
  return (
    <TableProvider>
    <div className="App">
      <FirstTask />
      <Form/> 
    </div>
    </TableProvider>
  );
};


export default App;