const API_URL = "https://app.nocodb.com/api/v2/tables/mqxdcj08df39q7u/records?offset=0&limit=25&where=&viewId=vwuk6k6pdfoz6672";
const API_TOKEN = "Q77FhyKItb24O_dHv26GYa18PrWrLXeTH5A7FPFn";

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
