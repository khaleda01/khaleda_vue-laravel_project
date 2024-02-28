import React from 'react'
import PortalFooter from './PortalFooter'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

export default function PortalLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <PortalFooter/>
    </div>
  )
}
