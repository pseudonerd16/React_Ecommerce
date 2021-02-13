import React from 'react'

export default function Header(props) {
    const{countCartItems} = props;
    return (
        <header>
            <div>
                <a href="#/"><h3>React Ecommerce</h3></a>
            </div>
            <div className="left">
                <a href="#/cart">Cart {''}{countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ):(
                    ''
                )
            }</a>
                <a href="#/signin">Sign In</a>
            </div>            
        </header>
    );
}