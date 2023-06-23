import Books from "./Books";
import { useState } from "react";
import { Link } from "react-router-dom";

function CurrentlyReading() {

  // State
	const [currentlyReading, setCurrentlyReading] = useState([]);

  // Functions
	function getCurrentlyReading(bookNames) {
		setCurrentlyReading(bookNames);
	}

  return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">Currently Reading</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
          {/* {
            searchResults.map(( book, index ) => (
              <li key={index}>
                <Books book={ book } />
              </li>
            ))
          } */}
				</ol>
			</div>
		</div>
	)
}

export default CurrentlyReading;