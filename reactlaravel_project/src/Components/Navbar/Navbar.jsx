import React, { useState } from 'react'
import { FaTruckMoving } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './navbar.css'
const Navbar = ({searchbtn}) => {
    const [search,setSearch] = useState()
    const {loginWithRedirect ,logout ,user,isAuthenticated} =useAuth0();
    return (
        <>
            <div className='free'>

                <div className='icon'>
                    <FaTruckMoving />
                </div>
                <p>Free shiping when shopping into 10000tk</p>
            </div>
            <div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src="./img/shopping.jpg" width={70} height={70} alt="logo"></img>

                    </div>
                    <div className='search_box'>
                        <input type="text" value={search} placeholder='search Your Product....' autoComplete='off' onChange={(e) => setSearch (e.target.value)}></input>
                        <button onClick={() => searchbtn(search)}>Searce</button>


                    </div>
                    <div className='icon'>
                        <div className='account'>
                            <div className='user_icon'>
                                <FiUser />
                            </div>
                            <p>Hello ,User</p>
                        </div>
                        <div className='second_icon'>
                            <Link to="/" className='link'><CiHeart /></Link>
                            <Link to="/cart" className='link'><IoBagCheckOutline /></Link>


                        </div>

                    </div>

                </div>

            </div>

            <div className='header'>
                <div className='container'>
                    <div className='nav'>

                        <ul>
                            <li>
                                <Link to="/" className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to="/product" className='link'>Product</Link>
                            </li>
                            <li>
                                <Link to="/about" className='link'>About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className='link'>Contact</Link>
                              
                            </li>
                        </ul>
                    </div>
                    <div className='auth'>
                    <Link to="Admin" className='link'><CiLogin /></Link>
                        {/* <button><CiLogin /></button> */}
                        {/* <button onClick={() => logout({logoutParams:{returnTo:window.location.origin }})}><CiLogout /></button> */}
                      
                      

                    </div>
                </div>



            </div>
        </>
    )
}

export default Navbar
