import React from 'react'
// import { Button, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import logo from '../../assets/img/logo192.png'

const HeroSection = () => {
  return (
    <div className="mb-5 p-5 primary-background text-white rounded">
      <div className='container flex-box'>
        <div className='details'>
        <h1 className='text-warning'>Little Lemon</h1>
        <h3>Lagos</h3>
        <p className='flex-2' >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do eiusmod.
        </p>
          <Link className='btn btn-warning' to="/reservation">Reserve a Table</Link>
        </div>
        <div>
          <img src={logo} alt="" className='' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection