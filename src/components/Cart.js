import React from 'react'

export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.18;
    const shippingPrice = itemsPrice > 5000 ? 0:50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
        <div className="cart">
            <h2>Cart</h2>
            <div>{cartItems.length === 0 && <h3>Cart is empty!</h3>}</div>
            {cartItems.map((item) => (
                <div className="itemcard" key={item.id}>
                    <div>{item.product_name}</div>
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                    <div>{item.qty} X Rs. {item.price.toFixed(2)}</div>
                </div>
                
            ))
            }
            {cartItems.length !== 0 && (
                <>
                <hr/>
                <div className="price">
                    <div>Items Price</div>
                    <div>Rs.{itemsPrice.toFixed(2)}</div>
                </div>
                <div className="price">
                    <div>Tax Price</div>
                    <div>Rs.{taxPrice.toFixed(2)}</div>
                </div>
                <div className="price">
                    <div>Shipping Price</div>
                    <div>Rs.{shippingPrice.toFixed(2)}</div>
                </div>
                <hr/>
                <div className="price">
                    <div><strong>Total Price</strong></div>
                    <div>Rs.{totalPrice.toFixed(2)}</div>
                </div>
                </>
            )}
        </div>
    );
}