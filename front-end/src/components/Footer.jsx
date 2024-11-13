import React from 'react';
import './Header.css';

const Footer = () => {
    return (
        <footer className="footer-section">
        <div className="footer-column">
            <div className="footer-logo">
                <img src="https://traicaydonglanh.giaodienwebmau.com/wp-content/themes/tiencuong-wordpress/images/thiet-ke-chua-co-ten-59-7873.png" alt="Company Logo"/>
            </div>
            <div className="footer-text">
                Mang đến cho người tiêu dùng những sản phẩm trái cây đông lạnh tiện lợi và chất lượng nhất
            </div>
        </div>
        <div className="footer-column">
            <p className="footer-company-info"><strong>CÔNG TY TNHH SX-TM-DV THỰC PHẨM VINADA</strong></p>
            <p className="footer-company-info"><i className="fa-solid fa-map"></i> <strong>Địa chỉ:</strong> Hòa Minh, Liên Chiểu, Đà Nẵng</p>
            <p className="footer-company-info"><i className="fa-solid fa-envelope"></i> <strong>Email:</strong> <a href="mailto:sonvcpd08236@fpt.edu.vn">sonvcpd08236@fpt.edu.vn</a></p>
            <p className="footer-company-info"><i className="fa-solid fa-phone-volume"></i> <strong>Hotline:</strong> <a href="https://zalo.me/0385828461">0385828461</a></p>
            <p className="footer-company-info"><i className="fa-solid fa-tag"></i> <strong>MST:</strong> 5901204022 do sở KH & ĐT Đà Nẵng<br/>cấp ngày 03/10/2023</p>
        </div>
        <div className="footer-column footer-policy">
            <p><strong>CHÍNH SÁCH</strong></p>
            <ul>
                <li><a href="/huong-dan-mua-hang">Hướng Dẫn Mua Hàng</a></li>
                <li><a href="/chinh-sach-bao-mat">Chính Sách Bảo Mật</a></li>
                <li><a href="/chinh-sach-thanh-toan">Chính Sách Thanh Toán</a></li>
                <li><a href="/chinh-sach-van-chuyen">Chính Sách Vận Chuyển</a></li>
                <li><a href="/chinh-sach-doi-tra">Chính Sách Đổi Trả</a></li>
                <li><a href="/dieu-khoan-dich-vu">Điều Khoản Dịch Vụ</a></li>
            </ul>
        </div>

        <div className="footer-column footer-social">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftraicaydonglanhlocphathcm&amp;tabs=timeline&amp;width=340&amp;height=100&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId"
                title="Facebook Page"></iframe>
            <div className="footer-certification">
                <a href="http://online.gov.vn/Home/WebDetails/116179" target="_blank" rel="nofollow noopener">
                    <img src="https://traicaydonglanh.giaodienwebmau.com/wp-content/uploads/2024/06/logoSaleNoti.webp" alt="Certification Logo"/>
                </a>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="payment-icons">
                <img src="https://via.placeholder.com/50x20?text=VISA" alt="Visa"/>
                <img src="https://via.placeholder.com/50x20?text=PayPal" alt="PayPal"/>
                <img src="https://via.placeholder.com/50x20?text=Stripe" alt="Stripe"/>
                <img src="https://via.placeholder.com/50x20?text=MasterCard" alt="MasterCard"/>
                <img src="https://via.placeholder.com/50x20?text=Cash+on+Delivery" alt="Cash on Delivery"/>
            </div>
            <p>© 2024. Công ty TNHH SX-TM-DV Thực Phẩm ABC. GPDKKD: XXXXXXX. Địa chỉ: Hòa Minh, Liên Chiểu, Đà Nẵng. Địa chỉ liên hệ và gửi chứng từ: Hòa Minh, Liên Chiểu, Đà Nẵng.</p>
            <p>Điện thoại: 0385828461. Email:sonvcpd08236@fpt.edu.vn. Chịu trách nhiệm nội dung: Giám đốc Vinada. Email:sonvcpd08236@fpt.edu.vn</p>
        </div>
    </footer>
    );
};

export default Footer;
