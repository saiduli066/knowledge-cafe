import React, { useEffect } from 'react';

const Home = () => {


    useEffect(() => {
        fetch("books.json")
          .then((res) => res.json())
          .then((data) => console.log(data));


    },[])


    return (
      
        <div className="book-container ">
          {/* {books.map((book) => (
            console.log(book)
          ))} */}
        </div>
    
    );
};

export default Home;