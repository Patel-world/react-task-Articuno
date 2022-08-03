import React from 'react'
import CountrySelector from './CountrySelector';
import img from './images/1.jpg'
import visa from '../assets/visa.svg'
import paypal from '../assets/paypal.svg'
import maestro from '../assets/maestro.svg'
import master from '../assets/master.svg'
import ideal from '../assets/ideal.svg'
import discover from '../assets/discover.svg'
import dbd from '../assets/delivermethod/dbd.svg'
import dhl from '../assets/delivermethod/dhl.svg'
import fedex from '../assets/delivermethod/fedex.svg'
import inpost from '../assets/delivermethod/inpost.svg'

import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";

const Hero = () => {
  const style = {
    transform: 'rotateY(180deg)'
   }
  return (
    <div className='container'>
        <div className="top">
            <div>Shipping and Payment</div>
            <div className='end1'>
                <div className='circstart'><IoCartOutline className='big'/></div><div className='circend'><MdOutlineLocalShipping className='big' style={style}/></div>
            </div>
        </div>
        
        <div className="main">
            <div className="first">
              <div className="half">
                <div>
                  <button className='green log'>LOG IN</button>
                  <button className='log'>SIGN UP</button>
                </div>
                <div>
                  <h6>Shipping information</h6>
                  <form>
                    <input type="email" placeholder="Email"></input>
                    <input type="text" placeholder="Address"></input>
                    <input type="text" placeholder="First name"></input>
                    <input type="text" placeholder="City"></input>
                    <input type="text" placeholder="Last name"></input>
                    <input type="text" placeholder="Postal code/ZIP"></input>
                    <input type="number" placeholder="Phone number"></input>
                    <CountrySelector />

                  </form>
                  
                </div>
              </div>
            </div>
            <div className="second">
              <div className="half">
              <h6>Payment method</h6>
                <div className='three'>
                  
                <button><img src={paypal}></img></button>
                <button><img src={visa}></img></button>
                <button><img src={master}></img></button>
                <button><img src={maestro}></img></button>
                <button><img src={discover}></img></button>
                <button><img src={ideal}></img></button>
                </div>
                <h6>Deliver method</h6>
                <div className='two'>
                <button><img src={inpost}></img> $20.00</button>
                <button><img src={dbd}></img>  $12.00</button>
                <button><img src={dhl}></img> $15.00</button>
                <button><img src={fedex}></img> $10.00</button>
                </div>
              </div>
            </div>
            <div className="third">
            <div className="half">
            <h6>Your cart</h6>
                <div className='top1'>
                  <div className='start'>
                    <img className='img' src={img} width="80" height="80"></img>
                    <ol>
                      <li className="bold">T-Shirt Summer Vibes</li>
                      <li className='light'>#261311</li>
                    </ol>
                  </div>
                  <div className='end'>
                    <ol>
                      <li className="bold">$89.99</li>
                      
                    </ol>
                    
                  </div>
                </div>
                <button className='tw'>
                  <p>Total Cost</p><p className='bold'>$159.98</p>
                </button>
                <div>
                  <div className='start'>
                  <MdOutlineLocalShipping className='big'/>
                    <p>You are $30.02 away from free shipping</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="footer">
        <div className='logo'>
          <div><FiArrowLeft/></div><div>Back</div>
        </div>
            <div className='end2'>
                <button>CONTINIUE SHOPPING</button><button className='green'>PROCEED TO PAYMENT</button>
            </div>
        </div>
    </div>
  )
}

export default Hero