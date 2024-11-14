import axios from "axios";
import setAuthHeader from "../utils/set-auth-header";

async function deleteUserById(baseUrl, userId) {
  await axios.delete(`${baseUrl}/users/${userId}`, {
    headers: setAuthHeader(),
    withCredentials: true,
  });
}

export default deleteUserById;
