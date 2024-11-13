import React, { useEffect, useState } from 'react';
import './Header.css';
import axios from 'axios'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // Lấy dữ liệu từ API khi component được render
    useEffect(() => {
        // Gọi API để lấy dữ liệu sản phẩm
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                setProducts(response.data); // Cập nhật state với dữ liệu trả về
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
            });
    }, []); // Chỉ gọi 1 lần khi component render lần đầu

    // Lấy 4 sản phẩm đầu tiên
    const firstContainerProducts = products.slice(0, 4);
    // Lấy 8 sản phẩm tiếp theo (hoặc từ 0 đến 8 nếu muốn lấy 8 sản phẩm trong container0)
    const secondContainerProducts = products.slice(4, 12);  // Sẽ lấy tối đa 8 sản phẩm (nếu có)

    return (
        <section>
            <div className="containersp1">
                <div className="headersp1">SẢN PHẨM BÁN CHẠY</div>
                <div className="product-grid">
                    {firstContainerProducts.map((product, index) => (
                        <div key={index} className="product-card">
                            <img src={product.imgSrc} alt={product.name} />
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                                <div className="product-weight">{product.weight}</div>
                                <div className="product-price">{product.price} VNĐ</div>
                                <a href="#" className="buy-now-btn">MUA NGAY</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container0">
                <div className="tabs">
                    <a href="#" className="tab active-tab">Tất Cả</a>
                    <a href="#" className="tab">Bơ Đông Lạnh</a>
                    <a href="#" className="tab">Dâu Tây Đông Lạnh</a>
                    <a href="#" className="tab">Mãng Cầu Đông Lạnh</a>
                    <a href="#" className="tab">Sapoche Đông Lạnh</a>
                    <a href="#" className="tab">Sầu Riêng Đông Lạnh</a>
                    <a href="#" className="tab">Xoài Đông Lạnh</a>
                </div>
                <div className="product-grid">
                    {secondContainerProducts.map((product, index) => (
                        <div key={index} className="product-card">
                            <img src={product.imgSrc} alt={product.name} />
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                                <div className="product-weight">{product.weight}</div>
                                <div className="product-price">{product.price} VNĐ</div>
                                <a href="#" className="buy-now-btn">MUA NGAY</a>
                            </div>
                        </div>
                    ))}
                    <a href="#" className="load-more-btn">XEM THÊM</a>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
