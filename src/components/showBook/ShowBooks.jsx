import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './ShowBook.css'

const ShowBooks = (props) => {
    const { book } = props;
    const {
      Title,
      Author,
      Author_img,
      Poster,
      Reading_time,
      Publication_date,
    } = book;
    return (
      <div className="card w-100 my-2 d-flex ">
        <img className="w-25 mx-auto my-2" src={Poster} alt="" />
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            <img className="Author_img" src={Author_img} alt="" />

            <div>
              <h5 className="p-0 m-0">{Author}</h5>
              <p className="m-0 p-0  ">
                <small className="font-weight-bold text-secondary">
                  {Publication_date}
                </small>
              </p>
            </div>
          </div>

          <div className="d-flex gap-2">
            <div className='reading-time'>{Reading_time} min read</div>
            <span>
              <FontAwesomeIcon className="cursor" icon={faBookmark} />
            </span>
          </div>
        </div>

        <h2>{Title}</h2>
        <a className="text-info mark-as-read">Mark as read</a>
      </div>
    );
};

export default ShowBooks;