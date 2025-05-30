import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import Img2 from './img2.jpg'
import Img4 from './img4.jpg'
import Img6 from './img6.jpg'
import regImage from './regImage.png'
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const roomTypes = [
  "Lều đơn",
  "Lều đôi",
  "Lều gia đình",
];

export const testimonials = [
  {
    name: "Hà Nguyễn",
    address: "Hà Nội, Việt Nam",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review: "Tôi đã sử dụng nhiều nền tảng đặt phòng nhưng chưa có trải nghiệm nào cá nhân hóa và tỉ mỉ như Forest Scent."
  },
  {
    name: "Minh Trần",
    address: "Hồ Chí Minh, Việt Nam",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4.5,
    review: "Forest Scent vượt xa mong đợi của tôi. Quy trình đặt phòng rất mượt mà, khu cắm trại thì rất ấm cúng. Rất khuyến khích!"
  },
  {
    name: "Lan Phạm",
    address: "Đà Nẵng, Việt Nam",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 4,
    review: "Trải nghiệm tuyệt vời! Tôi luôn tìm được những điểm cắm trại đẹp nhất qua Forest Scent. Các đề xuất rất chuẩn và đáng tin cậy."
  }
];

// Exclusive Offers Dummy Data
export const services = [
  {
    id: 1,
    title: "Bắn cung",
    description: "Tham gia trò chơi bắn cung hoàn toàn miễn phí tại khu vực sinh hoạt chung.",
    image: "https://drive.google.com/uc?id=1BM33OfuWXrGOmv9RKlMLe4u1-q7xqe1O"
  },
  {
    id: 2,
    title: "Đốt lửa trại",
    description: "Thưởng thức những buổi trình diễn nhạc sống sôi động và ấm áp bên ánh lửa trại mỗi tối cuối tuần.",
    image: "https://drive.google.com/uc?id=1zmqpAXUl4K-07pG5A__V8TgYP5Yk-crz"
  },
  {
    id: 3,
    title: "Xem phim ngoài trời",
    description: "Trải nghiệm không gian lửa trại ấm cúng và thưởng thức những bộ phim hấp dẫn dưới bầu trời đầy sao.",
    image: "https://drive.google.com/uc?id=1zmqpAXUl4K-07pG5A__V8TgYP5Yk-crz"
  }
];

// Facility Icon
export const facilityIcons = {
  "WiFi Miễn Phí": assets.freeWifiIcon,
  "Bữa Sáng Miễn Phí": assets.freeBreakfastIcon,
  "Khu Cẩm Tú Cầu": assets.hydrangeaIcon,
  "View Núi Hồ": assets.mountainLakeIcon,
  "Khu Ngữ Sắc": assets.sceneryIcon,
  "Khu Đồi Thông": assets.pineForestIcon,
};

// User Dummy Data
export const UserData = {
  idUser: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  Ten: "Huỳnh Thế An",
  email: "an.ht.62cntt@ntu.edu.vn",
  image: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
  role: "Admin"
}

export const Introduction = [
  {
    icon: assets.homeIcon,
    title: "Chỗ Nghỉ Sạch & An Toàn",
    description: "Không gian được bảo trì kỹ lưỡng và vệ sinh sạch sẽ dành riêng cho bạn."
  },
  {
    icon: assets.badgeIcon,
    title: "Vệ Sinh Nâng Cao",
    description: "Chủ nhà tuân thủ các tiêu chuẩn vệ sinh nghiêm ngặt của Forest Scent."
  },
  {
    icon: assets.locationFilledIcon,
    title: "Vị Trí Xuất Sắc",
    description: "90% khách đánh giá vị trí đạt 5 sao."
  },
  {
    icon: assets.heartIcon,
    title: "Nhận Phòng Thuận Tiện",
    description: "100% khách đánh giá việc nhận phòng đạt 5 sao."
  }
];

// Rooms Dummy Data
export const Rooms = [
  {
    _id: 1,
    roomType: "Lều đơn",
    pricePerNight: 600,
    amenities: ["WiFi Miễn Phí", "Bữa Sáng Miễn Phí"],
    images: [Img2],
    isAvailable: true,
  },
  {
    _id: 2,
    roomType: "Lều đôi",
    pricePerNight: 800,
    amenities: ["WiFi Miễn Phí", "View Núi Hồ", "Khu Đồi Thông"],
    images: [Img4],
    isAvailable: true,
  },
  {
    _id: 3,
    roomType: "Lều gia đình",
    pricePerNight: 1200,
    amenities: ["WiFi Miễn Phí", "Bữa Sáng Miễn Phí", "Khu Cẩm Tú Cầu", "View Núi Hồ"],
    images: [Img6],
    isAvailable: true,
  },
];

// User Bookings Dummy Data
export const BookingsData = [
  {
    _id: "bkg_001",
    User: {
      idUser: "user_01",
      Ten: "Nguyễn Nhật",
      email: "nhat.nguyen@example.com",
    },
    Rooms: {
      _id: 1,
      roomType: "Lều đơn",
      pricePerNight: 600,
    },
    ngayDen: "2025-06-01",
    ngayDi: "2025-06-02",
    soKhach: 2,
    tongTien: 1200,  // Giá tiền 2 đêm (600 x 2)
    phuongThucThanhToan: "Stripe",
    trangThai: "Đã Xác Nhận", 
    daThanhToan: true,
    ngayTao: "2025-05-20T10:00:00.000Z",
    ngayCapNhat: "2025-05-20T10:00:00.000Z",
  },
  {
    _id: "bkg_002",
    User: {
      idUser: "user_02",
      Ten: "Trần Lan",
      email: "lan.tran@example.com",
    },
    Rooms: {
      _id: 3,
      roomType: "Lều gia đình",
      pricePerNight: 1200,
    },
    ngayDen: "2025-06-10",
    ngayDi: "2025-06-12",
    soKhach: ,
    tongTien: 2.400,  // 2 đêm x 1200
    phuongThucThanhToan: "ThanhToanTaiCho", 
    trangThai: "Chờ Xác Nhận", 
    daThanhToan: false,
    ngayTao: "2025-05-22T14:30:00.000Z",
    ngayCapNhat: "2025-05-22T14:30:00.000Z",
  },
  {
    _id: "bkg_003",
    User: {
      idUser: "user_03",
      Ten: "Phạm Tiến",
      email: "pham.tien@example.com",
    },
    Rooms: {
      _id: 2,
      roomType: "Lều đôi",
      pricePerNight: 800,
    },
    ngayDen: "2025-06-15",
    ngayDi: "2025-06-16",
    soKhach: 6,
    tongTien: 800,  // 1 đêm x 800
    phuongThucThanhToan: "Stripe",
    trangThai: "Đã Hủy",  
    daThanhToan: false,
    ngayTao: "2025-05-25T08:45:00.000Z",
    ngayCapNhat: "2025-05-25T09:00:00.000Z",
  },
]

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 4400, 
  bookings: BookingsData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/