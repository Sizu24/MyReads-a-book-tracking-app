import Books from "./Books";

function CurrentlyReading({ books, updateShelf }) {

	const bookShelfSelection = (book, value) => {
		updateShelf(book, value);
	}

  return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">Currently Reading</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
          {
            books.length > 0 && books.map(( book, index ) => (
							book.shelf === "currentlyReading" &&
              <li key={ index }>
                <Books book={ book } bookShelfSelection={ bookShelfSelection } />
              </li>
            ))
          }
				</ol>
			</div>
		</div>
	)
}

export default CurrentlyReading;


//