import React from 'react'
import CountrySelector from './CountrySelector';

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
import {useEffect} from 'react'
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import jwt_decode from "jwt-decode"
import Cart from './Cart.js'

const Hero = () => {
  const google = window.google
  localStorage.setItem("cart",'[{"name":"T-Shirt Summer Vibes","img":"https://i.imgur.com/ZmrpdyU.jpg","price":"89.99","id":"#212315"},{"name":"Basic Slim Fit T-Shirt","img":"https://m.media-amazon.com/images/I/71Hr1QVKO9L._UL1500_.jpg","price":"69.99","id":"#212315"}]')
  const cart = JSON.parse(localStorage.getItem('cart'))
  var total=0
  
  setTotal()
  function setTotal(){
    cart.forEach(e => {
      total=total+parseFloat(e.price)
    });
  }
  var left = parseFloat(200)-total
  var str = 'You are $'+left.toFixed(2)+' away from free shipping'
  var msg = left>0?str:'Shipping Free'
  console.log(total)

  function handleCallbackResponse(res){
     console.log("Encoded jwt id token: "+res.credential)
     console.log(jwt_decode(res.credential))
  }
  useEffect(()=>{
    google.accounts.id.initialize({
      client_id: 'client-id',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size:"large"}
    )
  },[]);
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
                  <div id="signInDiv"></div>
                </div>
                <div>
                  <h6>Shipping information</h6>
                  <form>
                    <input type="email" placeholder="Email"></input>
                    <input type="text" placeholder="Address"></input>
                    <input type="text" placeholder="First name"></input>
                    <input type="text" placeholder="Last name"></input>
                    <input type="text" placeholder="City"></input>
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
                <Cart cart={cart}/>
                <button className='tw'>
                  <p>Total Cost</p><p className='bold'>${total}</p>
                </button>
                <div>
                  <div className='start'>
                  <MdOutlineLocalShipping className='big'/>
                    <p>{msg}</p>
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