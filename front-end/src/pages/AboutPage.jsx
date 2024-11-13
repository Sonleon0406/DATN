import React from "react";
import '../components/Header.css'; // Đường dẫn đến file CSS

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="breadcrumb">
        <a href="/">Trang Chủ</a> &raquo; <span>Giới thiệu</span>
      </div>

      <h1 className="title-main">GIỚI THIỆU</h1>

      <section className="content">
        <h2 className="section-title">Giới thiệu về Trái cây đông lạnh Lộc Phát</h2>
        <p>
          Trái cây đông lạnh Lộc Phát được điều hành bởi <strong>Công ty TNHH SX-TM-DV Thực phẩm Lộc Phát</strong> được thành lập ngày 03/10/2023, MST: 5901204022 do Sở kế hoạch và đầu tư tỉnh Gia Lai cấp cho ông Nguyễn Thanh Phúc làm chủ.
        </p>

        <p>
          Với sứ mệnh sản xuất và cung cấp các mặt hàng trái cây đông lạnh được thu mua, sơ chế và đóng gói tại Tây Nguyên, đặc biệt là bơ, sầu riêng, măng cụt và một số loại trái cây khác. Mục tiêu của chúng tôi là mang đến những sản phẩm chất lượng đạt tiêu chuẩn VietGap với giá cả hợp lý đến tay người tiêu dùng. Không chỉ cung cấp cho nội địa mà hiện giờ chúng tôi còn xuất khẩu ra một số nước như Mỹ, Trung Quốc, Nhật Bản, Úc, Ấn Độ,...
        </p>

        <p>
          Trái cây đông lạnh Lộc Phát được đóng gói đảm bảo hợp vệ sinh với dây chuyền công nghệ khép kín cùng đội ngũ công nhân được đào tạo chuyên nghiệp từ khâu chọn hàng, sơ chế cho đến khâu đóng gói kỹ lưỡng. Cơ sở trang bị thiết bị cần thiết để đảm bảo an toàn toàn lao động.
        </p>

        <h2 className="section-title">Lịch sử hình thành và phát triển</h2>
        <p>
          Khởi nguồn từ năm 2016, với niềm đam mê và tâm huyết với nông sản Việt, ông Nguyễn Thanh Phúc đã mạnh dạn thành lập hộ kinh doanh chuyên cung cấp trái cây tươi và đông lạnh. Nhận thấy tiềm năng lớn từ thị trường trái cây đông lạnh, ông đã không ngừng nỗ lực tìm tòi, học hỏi và ứng dụng <strong>công nghệ hiện đại</strong> vào quy trình sản xuất.
        </p>

        <p>
          Trải qua nhiều năm thành công và phát triển, năm 2023 đánh dấu bước ngoặt quan trọng khi chính thức chuyển đổi thành <strong>Công ty TNHH SX-TM-DV Thực phẩm Lộc Phát</strong>. Sự kiện này là minh chứng cho sự phát triển vượt bậc, khẳng định cam kết đầu tư bài bản, chuyên nghiệp và bền vững của Lộc Phát.
        </p>

        <p>
          Với hành trình 10 năm, Lộc Phát luôn đặt mục tiêu đem đến sản phẩm chất lượng và uy tín cho khách hàng. Hành trình này sẽ tiếp tục đưa Lộc Phát trở thành thương hiệu hàng đầu Việt Nam và vươn tầm quốc tế.
        </p>
      </section>
    </div>
  );
};

export default AboutPage; 
