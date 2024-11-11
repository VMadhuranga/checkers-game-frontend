import axios from "axios";
import setAccessToken from "../utils/set-access-token";
import getAccessToken from "../utils/get-access-token";
import { decodeJwt } from "jose";

async function refreshToken(baseUrl) {
  try {
    const token = getAccessToken();
    if (!token || decodeJwt(token).exp * 1000 < Date.now()) {
      const response = await axios.get(`${baseUrl}/refresh`, {
        withCredentials: true,
      });

      const { userId, accessToken } = response.data;
      setAccessToken(accessToken);

      return userId;
    }
  } catch (error) {
    console.error(error);
  }
}

export default refreshToken;
