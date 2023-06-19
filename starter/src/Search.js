import { Link } from "react-router-dom";
import { Serialize } from "form-serialize";

function Search({show, closePage}) {

  const searchBook = (e) => {
    const value = e.target.value;

    const searchResults = BooksAPI.search(value, 10);
    console.log(searchResults);
  }

  return(
    <div className="search-books">
      <div className="search-books-bar">

        <Link className="close-search" to="/">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input onChange={searchBook} type="text" name="book" placeholder="Search by title, author, or ISBN" />
        </div>

      </div>

      <div className="search-books-results">
        <ol className="books-grid">

        </ol>
      </div>

    </div>
  )
}

export default Search;