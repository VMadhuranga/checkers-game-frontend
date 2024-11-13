import axios from "axios";

async function signOutUser(baseUrl) {
  await axios.get(`${baseUrl}/sign_out`, { withCredentials: true });
}

export default signOutUser;
