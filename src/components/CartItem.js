import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className='cart-contaiener'>
               <div className="CartItem-image">
                <img src='https://ss7.vzw.com/is/image/VerizonWireless/ipad-pro-11-in-cellular-space-gray?fmt=pjpg'></img>
                 </div>
            <div className='CartItem-info'>
                <h2>Apple iPad Pro</h2>
                <div className="stockinfo">
                    <p>In Stock</p>
                    <div className='items-action'>
                        <div className='item-quantity'>
                            <select name="quantity" className='quantity-select'>
                                <option>qua:1</option>
                            </select>
                        </div>
                        
                        <div className="item-delete">
                            <button>delete</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='cartitem-price'>
                $2222
            </div>
        </div>
    )
}

export default CartItem
