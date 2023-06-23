import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Books from "./Books";
import { useState } from 'react';

function Search({ getBooks, books }) {
  // const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    getSearchResults(value);
  }

  const getSearchResults = async (value) => {
    const res = await BooksAPI.search(value);
    if (res !== undefined) {
      getBooks(res);
    } else {
      getBooks([]);
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">

        <Link className="close-search" to="/">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input onChange={handleSearch} type="text" name="book" placeholder="Search by title, author, or ISBN" />
        </div>

      </div>

      <div className="search-books-results">
        <ol className="books-grid">
        {
          books.length > 0 ? books.map(( book, index ) => <li key={index}><Books book={ book } /></li>) : ""
        }
        </ol>
      </div>

    </div>
  )
}

export default Search;
