import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
// eslint-disable-next-line no-undef
const API_URL = process.env.API;

const headers = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  };
};

export async function get(url) {
  const response = await fetch(`${API_URL}${url}`, {
    method: "GET",
    headers: headers(),
  });

  return response.json();
}
