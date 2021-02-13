import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div className='card'>
            <img src={product.thumbnail} alt="Not Found"/>
            <h3>{product.product_name}</h3>
            <h4>{product.color}</h4>
            <div><span>{product.currency}</span>{product.price}</div>
            <button onClick={() => onAdd(product)}>Add to cart</button>
        </div>
    )
}
