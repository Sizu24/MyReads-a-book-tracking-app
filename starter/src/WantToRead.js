import Books from "./Books";

function WantToRead({ books, updateShelf }) {

	const bookShelfSelection = (bookId, value) => {
		updateShelf(bookId, value);
	}

  return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">Want To Read</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
          {
            books.length > 0 && books.map(( book, index ) => (
							book.shelf === "wantToRead" &&
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

export default WantToRead;