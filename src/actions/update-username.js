import axios from "axios";
import setAuthHeader from "../utils/set-auth-header";

async function updateUsername(baseUrl, userId, formData) {
  try {
    await axios.patch(`${baseUrl}/users/${userId}/username`, formData, {
      headers: setAuthHeader(),
      withCredentials: true,
    });
  } catch (error) {
    return error.response.data.errors;
  }
}

export default updateUsername;
