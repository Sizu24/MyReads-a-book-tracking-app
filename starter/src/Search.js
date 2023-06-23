import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ShowBooks from "./ShowBooks";
import { useState } from 'react';

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    getSearchResults(value);
  }

  const getSearchResults = async (value) => {
    const res = await BooksAPI.search(value, 10);
    if (res) {
      setSearchResults(res);
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
          searchResults.map(( book, index ) => (
            <li key={index}>
              <ShowBooks book={ book } />
            </li>
          ))
        }
        </ol>
      </div>

    </div>
  )
}

export default Search;
