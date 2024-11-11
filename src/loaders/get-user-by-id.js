import axios from "axios";
import getAccessToken from "../utils/get-access-token";

async function getUserById(baseUrl, userId) {
  const response = await axios.get(`${baseUrl}/users/${userId}`, {
    headers: {
      Authorization: "Bearer " + getAccessToken(),
    },
    withCredentials: true,
  });

  return response.data;
}

export default getUserById;
