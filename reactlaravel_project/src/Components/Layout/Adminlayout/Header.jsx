/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
 import './Header.css'

const Header = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-gray p-0">
          <div className="container-fluid bg-black">
            <Link className="navbar-brand justify-content-md-center" to="#">My Deshboard</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Contact</Link>
                </li>
              </ul>
           <div className="d-flex">
                {/* <button className="btn btn-outline-primary" type="submit" >
                  Logout
                </button> */}
                 {/* <button ><CiLogout /></button> */}
              </div> 
            </div>
          </div>
        </nav>



    </>
  )
}

export default Header