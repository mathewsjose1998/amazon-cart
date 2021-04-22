import React from 'react'
import './Header.css'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Header({title}) {
    return (
        <div>
        <div className="App-header">
            <h1>{title} </h1>
          </div>
         <div className='main-container'>
             <CartItems/>
             <CartTotal/>
        
     </div>
    </div>
    )
}

export default Header
