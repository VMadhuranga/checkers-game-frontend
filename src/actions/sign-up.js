import axios from "axios";

async function signUp(baseUrl, formData) {
  try {
    await axios.post(`${baseUrl}/sign_up`, formData);
  } catch (err) {
    return err.response.data.errors;
  }
}

export default signUp;
