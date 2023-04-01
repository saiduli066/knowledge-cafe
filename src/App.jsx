import React, { useState, useEffect } from "react";

import "./App.css";
import Nav from "./components/Nav/Nav";
import SideCard from "./components/SideCard/SideCard";
import GetBook from "./components/showBook/GetBook";
import Question from "./components/Questions/Question";

function App() {
  const [readTime, setReadTime] = useState("");

  const handleReadTime = (readTime) => {
    // console.log(readTime);
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));

    if (previousReadTime) {
      const totalTime = previousReadTime + JSON.parse(readTime);
      localStorage.setItem("readTime", totalTime);
      setReadTime(totalTime);
    } else {
      localStorage.setItem("readTime", readTime);
      setReadTime(readTime);
    }
  };

  const [bookmarks, setBookmarked] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBookmarked(data.Books));
  }, []);

  return (
    <div className="App gap-2">
      <Nav />
      <div className="row">
        <div className="col-md-8">
          <GetBook handleReadTime={handleReadTime} />
        </div>

        <div className="col-md-4 mt-2">
          <SideCard bookmarks={bookmarks}/>
        </div>
      </div>

      <Question />
    </div>
  );
}

export default App;
