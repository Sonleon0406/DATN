import React from 'react';
import './Header.css';

const ProductCard = ({ imgSrc, name, weight, price }) => (
    <div className="product-card">
        <img src={imgSrc} alt={name} />
        <div className="product-info">
            <div className="product-name">{name}</div>
            <div className="product-weight">{weight}</div>
            <div className="product-price">{price} VNĐ</div>
            <a href="#" className="buy-now-btn">MUA NGAY</a>
        </div>
    </div>
);

export default ProductCard;
