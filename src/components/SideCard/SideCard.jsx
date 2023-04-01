import React from "react";
import './SideCard.css'

const SideCard = () => {
  return (
    <div>
      <div className="book-card  w-100">
        <div className="total-reading-time  p-2 mb-3 text-center">
          <h5>Spent time on read : 177 min</h5>
        </div>

        <div className="bg-light p-3">
          <div className="bookmarks">
            <h4>Bookmarked Blogs : 8</h4>
                  </div>
                  
                  
        </div>
      </div>
    </div>
  );
};

export default SideCard;
