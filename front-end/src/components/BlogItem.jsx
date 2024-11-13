import React from 'react';
import './Header.css';

const BlogItem = () =>{
    return(
        <section>
        <div className="blog-container">
            <div className="blog-header">BLOG CHIA SẺ</div>
            <div className="blog-content">
                <div className="blog-item">
                    <img src="https://via.placeholder.com/350x200" alt="Blog Image 1"/>
                    <div className="blog-info">
                        <div className="blog-title">Ăn sầu riêng có béo không? Sầu riêng có bao nhiêu calo?</div>
                        <div className="blog-date">27/06/2024</div>
                        <div className="blog-description">“Ăn sầu riêng có béo không?” là một câu hỏi phổ biến đối với những ai đang quan tâm đến việc kiểm soát cân nặng hoặc...</div>
                    </div>
                </div>

                <div className="blog-item">
                    <img src="https://via.placeholder.com/350x200" alt="Blog Image 2"/>
                    <div className="blog-info">
                        <div className="blog-title">Ăn sầu riêng có tốt không? 10 lợi ích tuyệt vời của sầu riêng</div>
                        <div className="blog-date">27/06/2024</div>
                        <div className="blog-description">Ăn sầu riêng có tốt không? là chủ đề gây nhiều tranh cãi và là thắc mắc của rất nhiều người. Người thì rất yêu thích...</div>
                    </div>
                </div>

                <div className="blog-item">
                    <img src="https://via.placeholder.com/350x200" alt="Blog Image 3"/>
                    <div className="blog-info">
                        <div className="blog-title">Bà bầu ăn bơ có tốt không? Lợi ích và cách ăn bơ để có một thai kỳ khỏe mạnh</div>
                        <div className="blog-date">09/06/2024</div>
                        <div className="blog-description">Trong hành trình mang thai, việc lựa chọn thực phẩm lành mạnh và bổ dưỡng để đảm bảo sức khỏe của cả mẹ và bé luôn...</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-container">
            <div className="about-header">VỀ CHÚNG TÔI</div>
            <div className="about-description">
                Trái cây đông lạnh Lộc Phát được điều hành bởi <strong>Công ty TNHH SX-TM-DV Thực phẩm Lộc Phát</strong> được thành lập ngày 03/10/2023, MST: 5901204022 do Sở kế hoạch và đầu tư tỉnh Gia Lai cấp cho ông Nguyễn Thanh Phúc làm chủ. Với sứ
                mệnh sản xuất và cung cấp các mặt hàng trái cây đông lạnh được thu mua, sơ chế và...
                <a>Xem thêm</a>
                <div className="more-content">
                    ...chế biến theo quy trình nghiêm ngặt, nhằm đảm bảo chất lượng tốt nhất cho người tiêu dùng. Công ty cam kết mang đến sản phẩm an toàn và đáng tin cậy cho khách hàng.
                </div>
            </div>
            <div className="features">
                <div className="feature-card">
                    <div className="feature-icon">🍏</div>
                    <div className="feature-title">Đa dạng sản phẩm</div>
                    <div className="feature-description">Công ty cung cấp nhiều loại sản phẩm trái cây đông lạnh</div>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🔬</div>
                    <div className="feature-title">An toàn sinh học</div>
                    <div className="feature-description">Sản phẩm đông gói đạt chuẩn chất lượng an toàn VSTP</div>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🍇</div>
                    <div className="feature-title">Thực phẩm sạch</div>
                    <div className="feature-description">Cung cấp các loại trái cây sạch từ vườn đến tay người dùng</div>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">✅</div>
                    <div className="feature-title">Xuất xứ rõ ràng</div>
                    <div className="feature-description">Trái cây đông lạnh có nguồn gốc xuất xứ theo quy định của tiêu chí Vệ sinh ATTP</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BlogItem;