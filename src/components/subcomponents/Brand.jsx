import React from 'react'
// import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/Logo .svg"

const Brand = () => {
  return (
    <>
     <Link to="/" class="navbar-brand" href="#">
    <img src={logo} class="d-inline-block align-top" alt=""/></Link>
    </>
   
  )
}

export default Brand