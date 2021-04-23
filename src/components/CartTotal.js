import React from 'react'
import './CartTotal.css'

import NumberFormat from 'react-number-format'


function CartTotal({items}) {
    
    let total=0
   
    const getTotalPrice=(items)=>{
     
        if(items){
             items.map((item)=>{
                 console.log(item.quantity )
                 console.log(item.price)
                total+=(item.price*item.quantity)
                
              
                console.log(total)
             })
             return total
            
        }
        
       
    }

    const getItemCount=(items)=>{
        let itemnum=0;

        if(items){
            items.map((item)=>{
               
              itemnum+=parseInt(item.quantity) 
               
               
            })
            return itemnum
           
       }
    }
    return (
  
         <div className="cartTotal">
             <div className='subtotal-container'>
             <h2>SubTotal {getItemCount(items)} items) : <span className='carttotal-price'><NumberFormat value={getTotalPrice(items)} displayType={'text'} decimalScale='2' thousandSeparator={true} prefix={'$'} /></span></h2>     
             </div>
             <div className="checkout-container">
                 <div className='checkout'>Proceed to Checkout</div>
                 
             </div>
             
        </div>
        
    )
}

export default CartTotal
