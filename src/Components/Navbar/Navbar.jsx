import React from 'react'
import { Link } from 'react-router'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        <Container>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                   <ul className='flex gap-x-[42px] font-sans font-semibold text-[18px] text-title'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Price</a></li>
                    <li><a href="">Blog</a></li>
                   </ul>
                </div>
                <div>
                    <button className='font-sans font-semibold text-[18px] leading-[200%] py-[14px] px-[28px] bg-primary text-white rounded-[100px]'>Contact Us</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar