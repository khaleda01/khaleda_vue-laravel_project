/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
 import './Sidebar.css'

const Sidebar = () => {
  return (
    <div>
         <aside className="sidebar bg-primary">
        <div className="logo">
            {/* <img src="logo.png" alt="Company Logo"> */}
            <h2>Admin Dashboard</h2>
        </div>
       
        <ul className="menu">
            <li><Link to="#" className="active bg-primary"> Dashboard</Link></li>
        

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle " to="customer" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Customer
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Add Cutomer</Link></li>
                <li><Link className="dropdown-item" to="#">All Customer</Link></li>
              </ul>
            </li>


            <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Product
      </Link>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><Link className="dropdown-item" to="addproduct">Add Product</Link></li>
        <li><Link className="dropdown-item" to="allproduct">All Product</Link></li>
      </ul>
    </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="category" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Category
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="addcategory">Add Category</Link></li>
                <li><Link className="dropdown-item" to="allcategory">All Category</Link></li>
              </ul>
            </li>

            <li><Link to="/reports"><i className="fa fa-bar-chart" to="./Booking"></i> Booking</Link></li>


            
            
            {/* <li><Link to="/productlist"><i className="fa fa-calendar"></i> Attendance</Link></li>
            <li><Link to="/addproduct"><i className="fa fa-calendar-plus-o"></i> Leave Management</Link></li>
            <li><Link to="/salary"><i className="fa fa-money"></i> Salary</Link></li>
            <li><Link to="/reports"><i className="fa fa-bar-chart"></i> Reports</Link></li>


            <li><Link to="/conten"><i className="fa fa-bar-chart"></i> Fontend</Link></li> */}


        </ul>
    </aside>
    </div>
  )
}

export default Sidebar