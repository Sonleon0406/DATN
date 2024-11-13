import React from 'react';
import './Header.css'; // Đảm bảo bạn liên kết file CSS

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>Vinada Frozen Fruits</h1>
                <p>Let’s Enjoy It!</p>
                <p>Mang đến cho người tiêu dùng những sản phẩm trái cây đông lạnh tiện lợi và chất lượng nhất</p>
                <a href="#" className="btn">Xem thêm</a>
            </div>
            <div className="banner-overlay"></div>
        </section>
    );
};

export default Banner;
