const API = process.env.MIDDLEWARE;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=UTF-8",
};

export async function get(url) {
  const response = await fetch(`${API}${url}`, {
    method: "GET",
    headers: headers,
  });
  return response.json();
}
