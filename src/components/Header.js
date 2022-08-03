import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { AiFillAmazonSquare } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
const Header = () => {
  const style = {
    color:'red'
    
   }
   const style1 = {
    
    width: '2em',
    height: '2em',
   }
  return (
    <div className="navbar-1">
      <div className="logo">
        <div><a href="#"><AiFillAmazonSquare style={style1}/></a></div>
        <div><a href='#'><span style={style}>E-</span><span>shop</span></a></div>
      </div>
      <div className="mid hide">
        
          <div><a href="#">Men</a></div><div><a href='#'>Women</a></div><div><a href='#'>Kids</a></div>
        
      </div>
      <div className="end11 hide">
      
          <div><a href="#"><AiOutlineSearch className='big'/></a></div><div><a href='#'><IoCartOutline className='big'/></a></div><div><a href='#'><MdPersonOutline className='big'/></a></div>
      
      </div>
    </div>
  )
}

export default Header