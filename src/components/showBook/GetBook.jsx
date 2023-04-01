import React, { useEffect, useState } from 'react';
import ShowBooks from './ShowBooks';

const GetBook = () => {
   
    const [books,setBooks] = useState([]);
    useEffect(() => {
        fetch("books.json")
          .then((res) => res.json())
          .then((data) => setBooks(data.Books));


    },[])


    return (
      
        <div className="book-container ">
          {books.map((book) => (
            <ShowBooks book={book} />
          ))}
        </div>
    
    );
};

export default GetBook;