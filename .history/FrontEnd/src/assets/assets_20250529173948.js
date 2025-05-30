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
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
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
  "lều đơn",
  "lều đôi",
  "lều gia đình",
];


export const testimonials = [
  {
    name: "Emma Rodriguez",
    address: "London, UK",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that Forest Scent provides."
  },
  {
    name: "Liam Johnson",
    address: "New York, USA",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4.5,
    review: "Forest Scent exceeded my expectations. The booking process was seamless, and the glamping site super cozy. Highly recommended!"
  },
  {
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 4,
    review: "Amazing experience! I always find the best glamping spots through Forest Scent. Their recommendations never disappoint!"
  }
];


// Exclusive Offers Dummy Data
export const services = [
  {
    id: 1,
    title: "Bắn cung",
    description: "Tham gia trò chơi bắn cung hoàn toàn miễn phí tại khu vực sinh hoạt chung.",
    image: "https://drive.google.com/file/d/1BM33OfuWXrGOmv9RKlMLe4u1-q7xqe1O/view?usp=sharing"
  },
  {
    id: 2,
    title: "Đốt lửa trại",
    description: "Thưởng thức những buổi trình diễn nhạc sống sôi động và ấm áp bên ánh lửa trại mỗi tối cuối tuần.",
    image: "https://drive.google.com/file/d/1zmqpAXUl4K-07pG5A__V8TgYP5Yk-crz/view?usp=sharing"
  },
  {
    id: 3,
    title: "Xem phim ngoài trời",
    description: "Trải nghiệm không gian lửa trại ấm cúng và thưởng thức những bộ phim hấp dẫn dưới bầu trời đầy sao.",
    image: "https://drive.google.com/file/d/1zmqpAXUl4K-07pG5A__V8TgYP5Yk-crz/view?usp=sharing"
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

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

export const introduction = [
  {
    id: 1,
    icon: assets.homeIcon,
    tieuDe: "Chỗ Nghỉ Sạch & An Toàn",
    moTa: "Không gian được bảo trì kỹ lưỡng và vệ sinh sạch sẽ dành riêng cho bạn."
  },
  {
    id: 2,
    icon: assets.badgeIcon,
    tieuDe: "Vệ Sinh Nâng Cao",
    moTa: "Chủ nhà tuân thủ các tiêu chuẩn vệ sinh nghiêm ngặt của Forest Scent."
  },
  {
    id: 3,
    icon: assets.locationFilledIcon,
    tieuDe: "Vị Trí Xuất Sắc",
    moTa: "90% khách đánh giá vị trí đạt 5 sao."
  },
  {
    id: 4,
    icon: "heartIcon",
    tieuDe: "Nhận Phòng Thuận Tiện",
    moTa: "100% khách đánh giá việc nhận phòng đạt 5 sao."
  }
];

// Rooms Dummy Data
export const rooms = [
  {
    "_id": 1,
    "roomType": "lều đơn",
    "pricePerNight": 150,
    "amenities": ["WiFi Miễn Phí", "Bữa Sáng Miễn Phí"],
    "images": [tentSingle1, tentSingle2],
    "isAvailable": true,
  },
  {
    "_id": 2,
    "roomType": "lều đôi",
    "pricePerNight": 250,
    "amenities": ["WiFi Miễn Phí", "View Núi Hồ", "Khu Đồi Thông"],
    "images": [tentDouble1, tentDouble2],
    "isAvailable": true,
  },
  {
    "_id": 3,
    "roomType": "lều gia đình",
    "pricePerNight": 350,
    "amenities": ["WiFi Miễn Phí", "Bữa Sáng Miễn Phí", "Khu Cẩm Tú Cầu", "View Núi Hồ"],
    "images": [tentFamily1, tentFamily2],
    "isAvailable": true,
  },
];


// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/