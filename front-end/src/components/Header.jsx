import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import './Header.css';

const Header = () => {
  useEffect(() => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach((dropdownToggle) => {
      dropdownToggle.addEventListener('mouseenter', () => {
        const dropdownMenu = dropdownToggle.nextElementSibling;
        dropdownMenu.classList.add('active'); // Hiện dropdown khi rê chuột vào
      });

      dropdownToggle.addEventListener('mouseleave', () => {
        const dropdownMenu = dropdownToggle.nextElementSibling;
        dropdownMenu.classList.remove('active'); // Ẩn dropdown khi rời chuột ra
      });
    });

    // Lắng nghe sự kiện mouseleave trên cả dropdown và menu
    const handleDropdownMenuMouseEnter = (e) => {
      const dropdownMenu = e.target.closest('.dropdown').querySelector('.dropdown-menu');
      dropdownMenu.classList.add('active'); // Giữ dropdown mở khi rê vào menu
    };

    const handleDropdownMenuMouseLeave = (e) => {
      const dropdownMenu = e.target.closest('.dropdown').querySelector('.dropdown-menu');
      dropdownMenu.classList.remove('active'); // Ẩn khi rời ra ngoài
    };

    dropdownToggles.forEach((dropdownToggle) => {
      const dropdownMenu = dropdownToggle.nextElementSibling; // lấy dropdown-menu tương ứng
      if (dropdownMenu) {
        dropdownMenu.addEventListener('mouseenter', handleDropdownMenuMouseEnter); // Giữ dropdown mở khi rê vào menu
        dropdownMenu.addEventListener('mouseleave', handleDropdownMenuMouseLeave); // Ẩn khi rời ra ngoài
      }
    });

    return () => {
      dropdownToggles.forEach((dropdownToggle) => {
        dropdownToggle.removeEventListener('mouseenter', () => {});
        dropdownToggle.removeEventListener('mouseleave', () => {});
        const dropdownMenu = dropdownToggle.nextElementSibling;
        if (dropdownMenu) {
          dropdownMenu.removeEventListener('mouseenter', handleDropdownMenuMouseEnter);
          dropdownMenu.removeEventListener('mouseleave', handleDropdownMenuMouseLeave);
        }
      });
    };
  }, []);

  return (
    <header>
  {/* Thanh trên cùng */}
  <div className='top-bar'>
    <div className='container'>
      <div className='marquee-container'>
        <p className='marquee-text'>Chào mừng quý khách hàng đến với trái cây đông lạnh Vinada</p>
      </div>
      <div className='social-icons'>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-tiktok"></i></a>
        <a href="#"><i className="fas fa-envelope"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>

  {/* Thanh giữa (Middle Bar) */}
  <div className='middle-bar'>
    <div className='container'>
      <div className='logo'>
        <img src="/Logo.png" alt="Logo" />
      </div>
      <div className='shop-info'>
        <h1>TRÁI CÂY ĐÔNG LẠNH VINADA</h1>
        <p>
          <i className="fas fa-truck"></i> Trụ sở chính: Thôn 6, Ia Băng, Đak Đoa, Gia Lai <br />
          <i className="fas fa-phone"></i> Hotline: 0383.798.631 - 0867.907.868
        </p>
      </div>
      <div className="cart">
        <button>GIỎ HÀNG / 0 VND <i className="fas fa-shopping-cart"></i></button>
      </div>
    </div>
  </div>

  {/* Thanh dưới cùng (Bottom Bar) */}
  <div className="bottom-bar">
    <div className="container">
      <div className="menu">
        <nav>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/about">Giới thiệu</Link></li>
            <li className="dropdown">
              <Link to="#" className="dropdown-toggle">Sản phẩm <i className="fas fa-chevron-down"></i></Link>
              <ul className="dropdown-menu">
                <li><Link to="#">Bơ đông lạnh</Link></li>
                <hr />
                <li><Link to="#">Mãng cầu đông lạnh</Link></li>
                <hr />
                <li><Link to="#">Sầu riêng đông lạnh</Link></li>
                <hr />
                <li><Link to="#">Sapoche đông lạnh</Link></li>
                <hr />
                <li><Link to="#">Dâu tây đông lạnh</Link></li>
                <hr />
                <li><Link to="#">Xoài đông lạnh</Link></li>
              </ul>
            </li>
            <li><Link to="#">Hệ thống</Link></li>
            <li><Link to="#">Tin tức</Link></li>
            <li><Link to="#">Liên hệ</Link></li>
          </ul>
        </nav>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm..." />
        <button><i className="fas fa-search"></i></button>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header; 