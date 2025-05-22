import reviewsData from "./Test.json";
// If you have a ReviewType, import it. Otherwise, use the type defined below.
export type ReviewType = {
    id: number;
    name: string;
    address: string;
    image: string;
    rating: number;
    review: string;
    avatar?: string;
    href?: string;
};

// Import avatar images (adjust paths as needed)
import avatar1 from "@/images/avatars/Image-1.png";
import avatar2 from "@/images/avatars/Image-2.png";
import avatar3 from "@/images/avatars/Image-3.png";
// ...add more if needed...

const imgs = [
    avatar1,
    avatar2,
    avatar3,
    // ...add more if needed...
];

// Replace with your actual API endpoint and token if needed
const API_URL = "https://app.nocodb.com/api/v2/tables/mv1i2g5clfl7tko/records?offset=0&limit=25&where=&viewId=vwu0qdr472tmmxll";
const API_TOKEN = "s5xB7tQBuVu9pYiEbT1aYPrqNLZuANXmPnQqVA7n"; // Replace with your nocodb API token

export async function fetchReviews(): Promise<ReviewType[]> {
    const response = await fetch(API_URL, {
        headers: {
            "xc-token": API_TOKEN,
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    const reviews = data.records || [];
    return reviews.map((item: any, index: number) => ({
        ...item,
        avatar: imgs[index] || item.image,
        // Add href or other fields as needed
    }));
}

export const DEMO_REVIEWS: ReviewType[] = reviewsData.map((item, index) => ({
    ...item,
    avatar: imgs[index] || item.image,
    // Add href or other fields as needed
}));
