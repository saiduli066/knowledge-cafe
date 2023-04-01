import React, { useState, useEffect } from "react";
import './SideCard.css'




const SideCard = ({ readTime, bookmarks }) => {
    console.log(bookmarks);
    
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
          <h4>Bookmarked Blogs: 5</h4>
          
            {bookmarks.map((bookmark) => {
              return <h5 className="bg-light m-2 gap-2">{bookmark.Title}</h5>;
            //   console.log(bookmark.Title);
            })}
         
        </div>
      </div>
    </div>
  );
};

export default SideCard;
