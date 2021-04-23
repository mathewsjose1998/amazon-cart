import React from 'react'
import './CartTotal.css'

import NumberFormat from 'react-number-format'

let itemnum=0
function CartTotal({items}) {
   
    let total=0
    const getTotalPrice=(items)=>{
        if(items){
             items.map((item)=>{
                 console.log(item.quantity )
                 console.log(item.price)
                total+=(item.price*item.quantity)
                itemnum+=item.quantity
                console.log(total)
             })
             return total
            
        }
        
       
    }
    return (
  
         <div className="cartTotal">
             <div className='subtotal-container'>
             <h2>SubTotal ({itemnum} items) : <span className='carttotal-price'><NumberFormat value={getTotalPrice(items)} displayType={'text'} decimalScale='2' thousandSeparator={true} prefix={'$'} /></span></h2>     
             </div>
             <div className="checkout-container">
                 <div className='checkout'>Proceed to Checkout</div>
                 
             </div>
             
        </div>
        
    )
}

export default CartTotal
