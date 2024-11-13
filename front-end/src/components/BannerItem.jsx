import React from 'react';
import './Header.css';

// Mảng banners chứa các thông tin banner
const banners = [
    { imgSrc: 'https://traicaydonglanh.giaodienwebmau.com/wp-content/uploads/2024/06/vs3-3773.png', title: 'ĐẢM BẢO CUNG CẤP', subtitle: 'NGUỒN HÀNG ỔN ĐỊNH QUANH NĂM' },
    { imgSrc: 'https://traicaydonglanh.giaodienwebmau.com/wp-content/uploads/2024/06/vs3-3773.png', title: 'ĐẢM BẢO CHẤT LƯỢNG', subtitle: 'VỆ SINH – AN TOÀN THỰC PHẨM' },
    { imgSrc: 'https://traicaydonglanh.giaodienwebmau.com/wp-content/uploads/2024/06/vs3-3773.png', title: 'BÌNH ỔN THỊ TRƯỜNG', subtitle: 'GIÁ CẢ HÀNG HÓA TRONG VÀ NGOÀI MÙA' },
];

// Component BannerItem để hiển thị các banner
const BannerItem = () => (
    <div className="banner-section">
        {banners.map((banner, index) => (
            <div className="banner-item" key={index}>
                <img src={banner.imgSrc} alt={banner.title} />
                <div className="banner-text">
                    <h3>{banner.title}</h3>
                    <p>{banner.subtitle}</p>
                </div>
            </div>
        ))}
    </div>
);

export default BannerItem;
