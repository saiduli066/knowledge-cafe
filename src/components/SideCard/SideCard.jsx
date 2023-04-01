import React, { useState, useEffect } from "react";
import './SideCard.css'


const SideCard = ({ readTime, bookmarks }) => {
    // console.log(bookmarks);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [readTime]);

  return (
    <div>
      <div className="book-card  w-100">
        <div className="total-reading-time  p-2 mb-3 text-center">
          <h5>Spent time on read : {time} min</h5>
        </div>

        <div className="bg-light p-3">
          <div className="bookmarks">
            <h4>Bookmarked Blogs : </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
