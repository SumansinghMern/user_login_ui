import Cookies from 'js-cookie'

export function getAuthToken() {
  const token = Cookies.get("Access-Token");
  return token;
}

export function setAuthToken(token /*  = sampleToken */) {
  return Cookies.set("Access-Token", token.token, {
    expires: token.expireTime,
  });
}

export function removeAuthToken() {
  return Cookies.remove("Access-Token");
}