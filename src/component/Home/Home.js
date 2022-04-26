import React, { memo } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import "../Home/home.css";

import ahc from "../../Data/img/anyconv (11).webp";
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ListProduct from "../listproduct/ListProduct";

const { Meta } = Card;
const Home = memo(() => {
  const Data = [
    {
      MaSanPham: 1,
      tenSanPham: "Charm bạc Pandora Moments hình chú chó Labrador màu đen",
      thongTinSanPham:
        "Bạn là một người yêu động vật? Labrador Puppy Dog Dangle Charm sẽ là sự lựa chọn đúng đắn. Thiết kế mô phỏng chú chó Labrador xinh xắn sẽ khiến tim bạn lạc nhịp bởi những điểm nhấn đáng yêu như chiếc vòng cổ hình xương hay lòng bàn chân xinh xắn. Sản phẩm như một lời nhắc nhở về tình yêu dành cho người bạn bốn chân dù bạn đang làm gì hay ở bất kỳ đâu",
      loaiSanPham: "Charm",
      donGiaMoi: "1.950.000₫",
      luotXem: 211,
      donGiaCu: 5455,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "oneSize",
      mausac: "đen",
      vatLieu: "enamel",
      HinhAnh: [
        "../../Data/img/anyconv.webp",
        "../../Data/img/anyconv (1).webp",
        "../../Data/img/anyconv (2).webp",
        "../../Data/img/anyconv (3).webp",
        "../../Data/img/anyconv (4).webp",
        "../../Data/img/anyconv (5).webp",
        "../../Data/img/anyconv (6).webp",
        "../../Data/img/anyconv (7).webp",
      ],
    },
    {
      MaSanPham: 2,
      tenSanPham: "Charm bạc mạ vàng hồng 14k Pandora Moments vương miện nữ hoàng",
      thongTinSanPham:
        "Tại sao lại là nữ hoàng trong một ngày khi bạn có thể là một người trong suốt cuộc đời với chiếc vương miện Pandora Moments bằng bạc được đính kim cương sang trọng này? Được tạo ra từ các kim loại hỗn hợp với chi tiết vương miện vương giả và một tấm bảng tròn có khắc 'Nữ hoàng', chiếc charm nữ hoàng dạng lủng lẳng đôi cho phép bạn nổi bật như nữ hoàng của thế giới của mình. Nó cũng là một món quà phù hợp cho những nữ hoàng tuyệt vời trong cuộc đời bạn, những người xứng đáng có được chiếc vương miện của riêng họ.",
      loaiSanPham: "Charm",
      donGiaMoi: "1.950.000₫",
      luotXem: 351,
      donGiaCu: 5455,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "oneSize",
      mausac: "đen",
      vatLieu: "14k rose gold plated",
      HinhAnh: [
        "../../Data/img/upload_4ea4785fbafd477db117f2276154eecb_master.webp",
        "../../Data/img/upload_67d0b026ddd048d5999382d32d355df2_master.webp",
        "../../Data/img/upload_817ec7390624455684b281fe540b5b87_master.webp",
        "../../Data/img/upload_17536d80561e408f80db2af2f6e92689_master.webp",
        "../../Data/img/upload_62377a3db0e749bbadeefa83ab6ad532_master.webp",
        "../../Data/img/upload_ae6c194c32034ed8baf3cace11b66a3e_master.webp",
      ],
    },
    {
      MaSanPham: 3,
      tenSanPham: "Charm bạc Disney Pluto nhiều màu",
      thongTinSanPham:
        "Mang lại niềm vui tươi trong mùa lễ này với charm Disney Pluto Christmas Gift. Được hoàn thiện thủ công bằng bạc sterling, trang sức này có Disney’s Pluto mặc cổ áo màu xanh, đội mũ Giáng Sinh màu đỏ được tráng men thủ công đang ngồi trước một món quà đáng yêu cùng một chiếc nơ. Hình bóng của chuột Mickey của Disney nổi bật trên vòng treo với một viên đá đặt ở trung tâm. Hãy tổ chức bữa tiệc lễ hội của riêng bạn bằng cách đeo viên charm này với các nhân vật Disney x Pandora khác trên chiếc vòng đeo tay của bạn.",
      loaiSanPham: "Charm",
      donGiaMoi: "1.950.000₫",
      luotXem: 251,
      donGiaCu: 5455,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "oneSize",
      mausac: "Nhiều màu",
      vatLieu: "Sterling silver",
      HinhAnh: ["../../Data/img/Charm bạc Disney Pluto nhiều màu.webp"],
    },
    {
      MaSanPham: 4,
      tenSanPham: "Vòng bạc Pandora Moments dạng chuỗi khóa cây gia đình đính đá lấp lánh",
      thongTinSanPham:
        "Hãy minh chứng sự cho đặc biệt của một mối quan hệ với vòng đeo tay Heart Family Tree Chain. Được hoàn thiện thủ công bằng hợp kim bạc, những khoảng trống của hình trái tim được trang trí bằng những viên đá trong suốt. Hình tượng cây gia đình với các chi tiết lá được đánh bóng xếp chồng nằm phía trên. Chiếc vòng có hai dây xích có kích thước khác nhau được kết hợp với nhau, một móc cài trượt để điều chỉnh độ vừa vặn và một chi tiết cành lá lấp lánh được gắn vào phần cuối của chiếc vòng. Hãy trao tặng tác phẩm này cho một thành viên thân thiết trong gia đình để bày tỏ tình yêu của bạn",
      loaiSanPham: "Vòng",
      donGiaMoi: "1,990,000₫",
      luotXem: 371,
      donGiaCu: 5455,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "20 cm",
      mausac: "Bạc",
      vatLieu: "Cubic Zirconia",
      HinhAnh: ["../../Data/img/Vongbac1.webp", "../../Data/img/vongbac2.webp"],
    },
    {
      MaSanPham: 5,
      tenSanPham: "Vòng kiềng mở two-tone Pandora Moments dạng Snake Chain",
      thongTinSanPham:
        "Nếu bạn đang tìm kiếm một chiếc vòng đeo tay nổi bật so với tất cả những chiếc khác và mang lại cho bạn điều gì đó đặc biệt, thì không cần tìm đâu xa. Chiếc vòng Pandora Moments Open Bangle này với nút silicon mạ vàng hồng 14k và nắp cuối có thể hoán đổi cho nhau là mọi thứ bạn đang tìm kiếm ở một chiếc vòng đeo đa năng và hơn thế nữa. Chiếc vòng đeo tay mở thanh lịch có hình dáng chuỗi rắn mang tính biểu tượng và vượt thời gian của Pandora để biến đổi phong cách của bạn ngay lập tức với thiết kế mang tính biểu tượng của nó.",
      loaiSanPham: "Carrier",
      donGiaMoi: "3,250,000₫",
      luotXem: 581,
      donGiaCu: 5455,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "16,00 cm",
      mausac: "Hồng",
      vatLieu: "14k rose gold plated",
      HinhAnh: [
        "../../Data/img/anyconv (8).webp",
        "../../Data/img/anyconv (9).webp",
        "../../Data/img/anyconv (13).webp",
        "../../Data/img/anyconv (10).webp",
        "../../Data/img/anyconv (11).webp",
        "../../Data/img/anyconv (12).webp",
      ],
    },
    {
      MaSanPham: 6,
      tenSanPham: "Vòng mềm Pandora Moments khóa trái tim T-Bar",
      thongTinSanPham:
        "Thêm một nét riêng cho bộ sưu tập với người thân yêu của bạn cùng vòng đeo tay Pandora Moments Heart T-Bar Snake Chain. Được hoàn thiện thủ công bằng hợp kim bạc, sản phẩm này được lấy cảm hứng từ vòng đeo tay Pandora Moments T-Bar Snake Chain cổ điển. Điểm nổi bật của thiết kế này là một hình trái tim mỏng với lỗ tròn ở một bên bao quanh móc khóa hình chữ T để có tác dụng mở và đóng, trong khi mặt còn lại được đánh bóng và có thể khắc. Được thiết kế để có thể phối được một lúc từ 10 -13 charm, chứa đựng một thông điệp chân thành nhất về sự hoàn thiện.    ",
      loaiSanPham: "Bracelet chain",
      donGiaMoi: "2,690,000₫",
      donGiaCu: 5455,
      luotXem: 421,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "16 cm",
      mausac: "Bạc",
      vatLieu: "Sterling silver",
      HinhAnh: ["../../Data/img/t-bar.webp.webp"],
    },
    {
      MaSanPham: 7,
      tenSanPham: "Vòng tay bạc Pandora Moments dạng chuỗi khóa ngôi sao đính đá trong suốt",
      thongTinSanPham:
        "Tại sao lại là nữ hoàng trong một ngày khi bạn có thể là một người trong suốt cuộc đời với chiếc vương miện Pandora Moments bằng bạc được đính kim cương sang trọng này? Được tạo ra từ các kim loại hỗn hợp với chi tiết vương miện vương giả và một tấm bảng tròn có khắc 'Nữ hoàng', chiếc charm nữ hoàng dạng lủng lẳng đôi cho phép bạn nổi bật như nữ hoàng của thế giới của mình. Nó cũng là một món quà phù hợp cho những nữ hoàng tuyệt vời trong cuộc đời bạn, những người xứng đáng có được chiếc vương miện của riêng họ.",
      loaiSanPham: "Bracelet chain",
      donGiaMoi: "2,950,000₫",
      luotXem: 631,
      donGiaCu: 5455,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "oneSize",
      mausac: "Trong suốt",
      vatLieu: "14k rose gold plated",
      HinhAnh: ["../../Data/img/trongsuot.webp", "../../Data/img/trongsuot.webp1"],
    },
    {
      MaSanPham: 8,
      tenSanPham: "Vòng tay da Pandora Moments màu đỏ",
      thongTinSanPham:
        "Thêm một chút sắc cạnh cho vẻ ngoài của bạn với chiếc vòng tay đan bằng chất liệu da sắc đỏ, kết hợp với phần nút gài mạ vàng 14K, một dòng kim loại hỗn hợp độc đáo được mạ vàng 14K. Hãy thử đeo những chiếc charm Pandora yêu thích của bạn theo một kiểu cách khác hơn cùng chiếc vòng da màu đỏ. Phong cách này hoàn toàn phù hợp với những bạn thích nổi bật giữa đám đông. Chiếc vòng tay đem đến cho bạn một vẻ ngoài đặc biệt và hiện đại, cho phép bạn thoải mái sáng tạo trong cách đeo. Bạn có thể kết hợp nó cùng với nhiều layer vòng tay và nhiều loại charm khác, cũng có thể đeo nó đơn lẻ như một tín vật bày tỏ.",
      loaiSanPham: "Charm Holders",
      donGiaMoi: "1.950.000₫",
      luotXem: 111,
      donGiaCu: 5455,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "oneSize",
      mausac: "Đỏ",
      vatLieu: "Leather",
      HinhAnh: ["../../Data/img/do.webp", "../../Data/img/do1.webp"],
    },
    {
      MaSanPham: 9,
      tenSanPham: "Vòng tay mềm bạc mà vàng 14k rose gold Pandora Reflexion dạng lưới",
      thongTinSanPham:
        "Pandora Reflexions là một cách hiện đại để phản ánh bạn là ai. Vòng đeo tay lưới phản xạ giữ những viên charm dạng bấm luôn phẳng để phản chiếu phong cách của bạn - bất kể hình dạng nào. Được mạ vàng hồng 14k để có lớp hoàn thiện màu hồng nhạt, chiếc đồng hồ này trông cũng bắt mắt khi đeo một mình hoặc xếp chồng lên nhau với những chiếc vòng tay khác. Hãy dệt câu chuyện của bạn theo phong cách của bạn và trở nên vàng và táo bạo, thêm những nét quyến rũ yêu thích của bạn từ bộ sưu tập.",
      loaiSanPham: "Reflexions",
      luotXem: 661,
      donGiaMoi: "4,450,000₫",
      donGiaCu: 5455,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "15 cm",
      mausac: "Hồng",
      vatLieu: "14k rose gold plated",
      HinhAnh: [
        "../../Data/img/hong.webp",
        "../../Data/img/hong1.webp",
        "../../Data/img/hong2.webp",
      ],
    },
    {
      MaSanPham: 10,
      tenSanPham: "Vòng tay mềm bạc Pandora Moments nhiều chuỗi",
      thongTinSanPham:
        "Phong cách ánh kim nổi bật với vòng tay Pandora Moments Multi Snake Chain. Được chế tác thủ công từ chất liệu mạ vàng hồng 14K, chiếc vòng tay với tone màu ấm áp này có ba chuỗi kim loại cảm hứng từ loài rắn mảnh và móc cài hình tròn có logo Pandora mang tính biểu tượng của thương hiệu. Hãy để chiếc vòng tay này xuất hiện cùng với những Pandora Moments charms của bạn tương tự như một chiếc vòng Pandora Moments thường dùng để tạo nên nét nhìn mới hiện đại nhưng vẫn vương vấn nét cổ điển thanh lịch trong đó.",
      loaiSanPham: "Bracelets",
      donGiaMoi: "5,550,000₫",
      luotXem: 121,
      donGiaCu: 5455,
      loaiSanPhamTheoNhuCau: "Mua cho mẹ",
      KichThuoc: "16 cm",
      mausac: "Hồng",
      vatLieu: "14k rose gold plated",
      HinhAnh: [
        "../../Data/img/hongbac.webp",
        "../../Data/img/hongbac1.webp",
        "../../Data/img/hongbac2.webp",
      ],
    },
  ];
  return (
    <div>
      <div className="SlideHomeContainer container">
      <Carousel style={{height:"600px"}}>
        <Carousel.Item>
          <img
            className="d-block w-100 imgItemSlideHome"
            src={`https://picsum.photos/id/${Math.floor(Math.random() * 10) + 1}/200/300`}
            alt="First slide"
            style={{objectFit:'cover',width:"100%"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://picsum.photos/id/${Math.floor(Math.random() * 10) + 1}/200/300`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://picsum.photos/id/${Math.floor(Math.random() * 10) + 1}/200/300`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
      <ListProduct/>
    </div>
  );
});

export default Home;
