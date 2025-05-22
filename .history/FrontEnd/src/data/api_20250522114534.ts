export async function callApi<T>(url: string, token: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      "xc-token": token,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`API call failed: ${response.status} ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}

// riêng cho bảng testimonials
const API_URL_TESTIMONIALS = "https://app.nocodb.com/api/v2/tables/mqxdcj08df39q7u/records?offset=0&limit=25&where=&viewId=vwuk6k6pdfoz6672";
const API_TOKEN_TESTIMONIALS = "Q77FhyKItb24O_dHv26GYa18PrWrLXeTH5A7FPFn";

export async function Testimonials() {
  return callApi(API_URL_TESTIMONIALS, API_TOKEN_TESTIMONIALS);
}

// riêng cho bảng rooms
const API_URL_ROOMS = "https://app.nocodb.com/api/v2/tables/my0zblcjemxemmk/records?offset=0&limit=25&where=&viewId=vw9hrowdlkdjt27x";
const API_TOKEN_ROOMS = "s5xB7tQBuVu9pYiEbT1aYPrqNLZuANXmPnQqVA7n";

export async function Rooms() {
  return callApi(API_URL_ROOMS, API_TOKEN_ROOMS);
}

const API_URL_SERVICE = "https://app.nocodb.com/api/v2/tables/my4woihmuapnd5p/records?offset=0&limit=25&where=&viewId=vwjgbx66qshbxxa2";
const API_TOKEN_SERVICE = "Q77FhyKItb24O_dHv26GYa18PrWrLXeTH5A7FPFn";

export async function Service() {
  return callApi(API_URL_SERVICE, API_TOKEN_SERVICE);
}

const API_URL_INTRODUCE = "https://app.nocodb.com/api/v2/tables/m6lh8lg4oi1koz2/records?offset=0&limit=25&where=&viewId=vw2thmym51hdo6n3";
const API_TOKEN_INTRODUCE = "";