import React from 'react';
import './Header.css';

const infos = [
    { title: 'NGUỒN CUNG ỔN ĐỊNH', content: 'Sản lượng hơn 100 tấn mỗi năm...' },
    { title: 'GIÁ CẢ BÌNH ỔN', content: 'Trái cây đông lạnh mang đến sự bình ổn...' },
    { title: 'MẪU MÃ ĐA DẠNG', content: 'Tiện lợi trong việc chế biến và bảo quản...' },
    { title: 'MẪU MÃ ĐA DẠNG', content: 'Tiện lợi trong việc chế biến và bảo quản...' },

];

const InfoCard = ({ title, content }) => (
    <div className="info-card">
        <h3>{title}</h3>
        <p>{content}</p>
        <a href="#" className="btn">XEM NGAY</a>
    </div>
);

const InfoSection = () => (
    <section className="info-section">
        {infos.map((info, index) => (
            <InfoCard key={index} title={info.title} content={info.content} />
        ))}
    </section>
);

export default InfoSection;
