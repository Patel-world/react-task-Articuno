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
        <div><AiFillAmazonSquare style={style1}/></div>
        <div><span style={style}>E-</span><span>shop</span></div>
      </div>
      <div className="mid hide">
        
          <div>Men</div><div>Women</div><div>Kids</div>
        
      </div>
      <div className="end hide">
      
          <div><AiOutlineSearch className='big'/></div><div><IoCartOutline className='big'/></div><div><MdPersonOutline className='big'/></div>
      
      </div>
    </div>
  )
}

export default Header