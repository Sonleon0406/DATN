import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Giá: {product.price} VNĐ</p>
            <p>{product.description}</p>
            <button>Thêm vào giỏ</button>
        </div>
    );
};

export default ProductItem;
