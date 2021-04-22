import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'

function CartItems() {
    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <hr/>
         <div className="cart-items">
         <CartItem/>
         
         </div>
       
        </div>
        
    )
}

export default CartItems
