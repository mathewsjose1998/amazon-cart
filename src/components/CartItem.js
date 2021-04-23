import React from 'react'
import './CartItem.css'


function CartItem({items}) {


const showcart=(items)=>{
  return  items.map((item)=>{
        console.log(item.title)
        return(
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
                            <select name="quantity" value={item.quantity} className='quantity-select'>
                                <option value="1">Qua:1</option>
                                <option value="2">Qua:2</option>
                                <option value="3">Qua:3</option>
                                <option value="4">Qua:4</option>
                            </select>
                        </div>
                        <div >|</div>
                        <div className="item-delete">
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


    })

}

    return (
        <div>
            {showcart(items)}
        </div>
        
    )
}

export default CartItem
