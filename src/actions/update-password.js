import axios from "axios";
import setAuthHeader from "../utils/set-auth-header";

async function updatePassword(baseUrl, userId, formData) {
  try {
    await axios.patch(`${baseUrl}/users/${userId}/password`, formData, {
      headers: setAuthHeader(),
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);

    return error.response.data.errors;
  }
}

export default updatePassword;
