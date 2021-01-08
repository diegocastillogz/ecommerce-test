import fetch from "node-fetch";
const API_URL = "https://api.mercadolibre.com/";

const headers = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  };
};

export async function get(url, params = {}) {
  const response = await fetch(`${API_URL}${url}`, {
    method: "GET",
    headers: headers(),
  });

  return response.json();
}
