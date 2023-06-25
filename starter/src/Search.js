import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Books from "./Books";
import { useState } from "react";

function Search({ updateShelf }) {

  const [searchedBooks, setSearchedBooks] = useState([]);

	const bookShelfSelection = (book, value) => {
		updateShelf(book, value);
	}

  const getSearchValue = (e) => {
    const value = e.target.value;
    getSearchResults(value);
  }

  // const getSearchResults = async (value) => {
  //   const res = await BooksAPI.search(value);
  //   if (res !== undefined) {
  //     getBooks(res);
  //   } else {
  //     getBooks([]);
  //   }
  // }

  const getSearchResults = async (value) => {
    const res = await BooksAPI.search(value);
    if (res !== undefined) {
      setSearchedBooks(res);
    } else {
      setSearchedBooks([]);
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">

        <Link className="close-search" to="/">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input onChange={getSearchValue} type="text" name="book" placeholder="Search by title, author, or ISBN" />
        </div>

      </div>

      <div className="search-books-results">
        <ol className="books-grid">
        {
          searchedBooks.length > 0 &&
            searchedBooks.map(( book, index ) =>
              <li key={index}>
                <Books book={ book } bookShelfSelection={bookShelfSelection} />
              </li>)
        }
        </ol>
      </div>

    </div>
  )
}

export default Search;
