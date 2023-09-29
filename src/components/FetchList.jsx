import { useState } from "react";

const FetchList = () => {
  const url = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [books, setBooks] = useState([]);

  const handleClick = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  };

  return (
    <div className="fetch-list" >
      <h1>Fetch List</h1>
      <button onClick={handleClick}>Fetch Data</button>
      <div className="books-container">
        {books.map((book) => (
          <div className="books" key={book.isbn}>
            <h3>Book {book.isbn}</h3>
            <h2>{book.name}</h2>

            <div className="details">
              <p>👨: {book.authors}</p>
              <p>📖: {book.numberOfPages}</p>
              <p>🏘️: {book.country}</p>
              <p>⏰: {book.released.slice(0, 4)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FetchList;
