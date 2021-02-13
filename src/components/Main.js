import React from 'react';
import Product from './Product'

export default function Main(props) {
    const {products, onAdd} = props;
    return(
    <div className="content">
        <div className="row">
            {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
        </div>
    </div>
    ) ;
}
