import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'
import items from '../Data'


function CartItems({items,setCartItems}) {

    const ChangeItemQuantity=(e,index)=>{
console.log('changed')

console.log(e.target.value)
console.log(index)


let newItem=[...items]
newItem[index].quantity=e.target.value
setCartItems(newItem)



    }

const deleteItem=(indextodelete)=>{
console.log('deleted')

const newItems=items.filter((value,index)=>{
    return index!=indextodelete;
    
   
})

setCartItems(newItems)




}

  

    console.log(items)
    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <hr/>
         <div className="cart-items">
           { items.map((item,index)=>
               
                <CartItem
                index={index}
                item={item}
                key={index}
                ChangeItemQuantity={ChangeItemQuantity}
                deleteItem={deleteItem}
                />

              
            )

        
}

         
         </div>
       
        </div>
        
    )
}

export default CartItems
