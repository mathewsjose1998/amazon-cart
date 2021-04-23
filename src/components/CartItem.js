import React from 'react'
import './CartItem.css'
console.log("dsd")

function CartItem({ item,index, ChangeItemQuantity,deleteItem}) {
    console.log(item)
    


    return (
        <div className='cart-contaiener'>
           
        <div className="CartItem-image">
         <img src={`${process.env.PUBLIC_URL}/items/${item.image}`}></img>
          </div>
     <div className='CartItem-info'>
         <div className='info-title'>  <h2>{item.title}</h2></div>
       
         <div className="stockinfo">
             <p>{item.stock}</p>
             <div className='items-action'>
                 <div className='item-quantity'>
                     <select name="quantity" value={item.quantity} onChange={(e)=>{ChangeItemQuantity(e,index)}} className='quantity-select'>
                         <option value="1">Qua:1</option>
                         <option value="2">Qua:2</option>
                         <option value="3">Qua:3</option>
                         <option value="4">Qua:4</option>
                     </select>
                 </div>
                 <div >|</div>
                 <div className="item-delete" onClick={(e)=>{deleteItem(index)}}>
                     delete
                 </div>

             </div>
         </div>
     </div>
     <div className='cartitem-price'>
         ${item.price}
     </div>
 </div>
        
    )
}

export default CartItem
