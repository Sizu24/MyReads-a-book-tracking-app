import ShowBooks from "./ShowBooks";
import { useState } from "react";

function CurrentlyReading() {

	const [currentlyReading, setCurrentlyReading] = useState([]);

	function getCurrentlyReading(bookNames) {
		setCurrentlyReading(bookNames);
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
          currentlyReading.map(( book, index ) => (
            <li key={index}>
              <ShowBooks book={ book } getBookStatus={ getCurrentlyReading } />
            </li>
          ))
        }
        </ol>
      </div>

    </div>
  )
}

export default CurrentlyReading;