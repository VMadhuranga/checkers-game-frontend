import axios from "axios";

async function signUpUser(baseUrl, formData) {
  try {
    await axios.post(`${baseUrl}/sign_up`, formData);
  } catch (err) {
    return err.response.data.errors;
  }
}

export default signUpUser;
