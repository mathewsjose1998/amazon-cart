import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'
import items from '../Data'


function CartItems({items}) {


  

    console.log(items)
    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <hr/>
         <div className="cart-items">
            
         <CartItem items={items}/>
         
         </div>
       
        </div>
        
    )
}

export default CartItems
