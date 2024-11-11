import axios from "axios";
import setAccessToken from "../utils/set-access-token";

async function signInUser(baseUrl, formData) {
  try {
    const response = await axios.post(`${baseUrl}/sign_in`, formData, {
      withCredentials: true,
    });
    const { userId, accessToken } = response.data;
    setAccessToken(accessToken);

    return { userId };
  } catch (error) {
    return { errors: error.response.data.errors };
  }
}

export default signInUser;
