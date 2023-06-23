import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Search from "./Search";
import Homepage from "./Homepage";

function App() {

  const [books, setBooks] = useState([]);

   function getBooks(bookList) {
    console.log(bookList);
    setBooks(bookList);
  }

  return (
    <Routes>
      <Route path="/search" element={ <Search getBooks={getBooks} books={books} /> } />
      <Route path="/" element={ <Homepage /> } />
    </Routes>
  );
}

export default App;
