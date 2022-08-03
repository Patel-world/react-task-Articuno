import React from 'react'

const Cart = ({cart}) => {
  return (
    <div className='top1'>
                  {
                    cart.map(item => (
                        <>
                        <div className='start'>
                    <img className='img' src={item.img} width="60" height="60"></img>
                    <ol>
                      <li className="bold">{item.name}</li>
                      <li className='light'>{item.id}</li>
                    </ol>
                  </div>
                  <div className='end'>
                    <ol>
                      <li className="bold">${item.price}</li>
                      
                    </ol>
                    
                  </div></>
                    ))
                  }
            </div>
  )
}

export default Cart