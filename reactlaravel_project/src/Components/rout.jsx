/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home/home'
import Product from './Product/product'
import Cart from './Cart/cart'
import AdminlLayout from './Layout/Adminlayout/AdminlLayout'
import Test from './Test'
// import AdminAddProduct from './Layout/Adminlayout/Product/AdminAddCategory'
import AdminCustomer from './Layout/Adminlayout/Customer/AdminCustomer'

import AdminAddCategory from './Layout/Adminlayout/Category/AdminAddCategory'
import AdminAllCategory from './Layout/Adminlayout/Category/AdminAllCategory'

import AdminAllProduct from './Layout/Adminlayout/Product/AdminAllProduct'
import AdminAddProduct from './Layout/Adminlayout/Product/AdminAddProduct'

import PortalLayout from './Layout/PortalLayout/PortalLayout'
// import Header from './Layout/Adminlayout/header'

const Rout = ({product,setProduct,detail,view,close,setClose ,cart ,setCart ,addtocart}) => {
  return (
    <>
        <Routes>
            <Route path='/' element={<PortalLayout/>}>
                <Route path='' element={< Home  detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
            </Route>  
            <Route path='/admin' element={<AdminlLayout/>}>
              {/* <Route path='' element={<Test/>}/> */}
              <Route path='addproduct' element={<AdminAddProduct/>} />
              <Route path='allproduct' element={<AdminAllProduct/>} />


              <Route path='allcategory' element={<AdminAllCategory/>} />
              <Route path='addcategory' element={<AdminAddCategory/>} />

              <Route path='customer' element={<AdminCustomer/>} />
             
              
              {/* <Route path='header' element={<Header/>} /> */}
              {/* <Route path='user' element={<div>Hello</div>}/> */}
            </Route>
            <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
    </>
  )
}

export default Rout