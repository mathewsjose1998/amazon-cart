import React from 'react'
import './CartTotal.css'

let itemnum=0
function CartTotal({items}) {
    itemnum=items.length
    let total=0
    const getTotalPrice=(items)=>{
        if(items){
             items.map((item)=>{
                 console.log(item.quantity )
                 console.log(item.price)
                total+=(item.price*item.quantity)
                console.log(total)
             })
             return parseInt(total)
            
        }
        
       
    }
    return (
  
         <div className="cartTotal">
             <div className='subtotal-container'>
             <h2>SubTotal ({itemnum} items) : <span className='carttotal-price'>${getTotalPrice(items)}</span></h2>     
             </div>
             <div className="checkout-container">
                 <div className='checkout'>Proceed to Checkout</div>
                 
             </div>
             
        </div>
        
    )
}

export default CartTotal
