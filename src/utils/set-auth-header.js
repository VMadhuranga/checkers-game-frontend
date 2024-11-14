import getAccessToken from "./get-access-token";

function setAuthHeader() {
  return {
    Authorization: `Bearer ${getAccessToken()}`,
  };
}

export default setAuthHeader;
