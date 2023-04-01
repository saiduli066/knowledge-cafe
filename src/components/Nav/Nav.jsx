import React from 'react';
import logo from './programmingHero.jpg';
import './Nav.css'

const Nav = () => {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mt-4 px-3 ">
          <h1 className="font-weight-bold">Knowlegde Cafe</h1>
          <img className="nav-img rounded-circle" src={logo} alt="" />
            </div>
            <hr className='border-5  '/>
      </div>
    );
};

export default Nav;