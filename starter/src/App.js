import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
import Homepage from "./Homepage";

function App() {
  // State
  const [books, setBooks] = useState([]);

  useEffect(() => {
  const getAllBooks = async() => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  }
  getAllBooks();
  }, [books]);

  //  const getBooks = (books) => {
  //   setBooks(books);
  //  };

  //  const updateShelf = (bookId, value) => {
  //     setBooks((prevBooks) => 
  //       prevBooks.map((book) => book.id === bookId ? { ...book, shelf: value } : book
  //     )
  //   );
  //   console.log(bookId);
  //   console.log(value);
  //  };

  const updateShelf = (book, value) => {
    const updateBooks = async () => {
      const res = await BooksAPI.update(book, value);
      console.log(res);
      setBooks((prevBooks) => prevBooks.map((book) => [{...book, res }]))
    }
    updateBooks();
  };

  return (
    <Routes>
      <Route exact path="/" element={ <Homepage books={books} updateShelf={updateShelf}/> } />
      <Route exact path="/search" element={ <Search updateShelf={updateShelf} /> } />
    </Routes>
  );
}

export default App;


// App
  // Homepage <-- Shelf State
    // Current <-- Value goes to state function
      // Book <-- Send Value
    // Want <-- Value goes to state function
      // Book <-- Send Value
    // Read <-- Value goes to state function
      // Book <-- Send Value
  // Search <-- Shelf State <-- Value goes to state function
    // Book

