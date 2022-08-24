import React from "react";

import './product-item.styles.css';

const ProductItem = ({props}) => (
    <div className='product-item'>
        <div className='product-item-img'>
            <img src={props.img} alt='pet' />
        </div>
        <div className='product-item-title'>{props.title}</div>
        <div className='product-item-price'>
            <div className="product-item-price-original" style={{color: props.discount ? "var(--color-gray-primary)" : "var(--color-green-primary)", textDecoration: props.discount ? "line-through" : "none"}}>{props.price}</div>
            {props.discount ? <div className="product-item-price-discount">{props.discount}</div> : ""}
        </div>
    </div>
)


export default ProductItem;