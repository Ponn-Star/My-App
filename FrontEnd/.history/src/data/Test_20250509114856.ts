/**
 * Gọi API với URL và token, trả về dữ liệu JSON.
 * @param url string - endpoint API
 * @param token string - API token
 */
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
