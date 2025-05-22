const NOCODB_API_URL = "https://app.nocodb.com/api/v2/tables";
const NOCODB_API_KEY = "Q77FhyKItb24O_dHv26GYa18PrWrLXeTH5A7FPFn";

export async function callApi<T>(tableId: string, offset = 0, limit = 25): Promise<T> {
  const url = `${NOCODB_API_URL}/${tableId}/records?offset=${offset}&limit=${limit}`;
  
  const response = await fetch(url, {
    headers: {
      "xc-token": NOCODB_API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.status} ${response.statusText}`);
  }
  
  return response.json() as Promise<T>;
}
