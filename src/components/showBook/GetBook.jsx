import React, { useEffect, useState } from 'react';
import ShowBooks from './ShowBooks';


const GetBook = ({ handleReadTime }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data.Books));
  }, []);

  return (
    <div className="book-container p-1">
      {books.map((book) => (
       
        <ShowBooks
          book={book}
          handleReadTime={handleReadTime}
          key={book.ISBN}
        />
        
      ))}
    </div>
  );
};

export default GetBook;