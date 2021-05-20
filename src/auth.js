import axios from "axios";
import crypto from "crypto";
import qs from "qs";

// An authorized get function
export async function get(path) {
  const outletAuth = process.env.OUTLET_AUTH;
  const secretKey = process.env.SECRET_KEY;
  const timestamp = Date.now();
  const API_Root = "https://api.performfeeds.com";
  const secret = outletAuth + timestamp + secretKey;
  const authN = crypto.createHash("sha512").update(secret).digest("hex");

  // Start token request
  const tokenOptions = {
    baseURL: API_Root,
    url: `/oauth/token/${outletAuth}?_rt=b&_fmt=json`,
    method: "POST",
    data: qs.stringify({
      grant_type: "client_credentials",
      scope: "b2b-feeds-auth",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Basic ${authN}`,
      Timestamp: timestamp,
    },
  };
  const tokenResponse = await axios(tokenOptions);
  const token = tokenResponse.data.access_token;

  // Start main request
  const requestOptions = {
    baseURL: API_Root,
    url: path,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios(requestOptions);
  const data = response.data;
  return data;
}
