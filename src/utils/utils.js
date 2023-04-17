import Cookies from 'js-cookie'

export function getAuthToken() {
  const token = Cookies.get("Access-Token");
  return token;
}

export function setAuthToken(token /*  = sampleToken */) {
  console.log(token,"ttttttttttt")
  return Cookies.set("Access-Token", token, {
    expires: token.expireTime,
  });
}

export function removeAuthToken() {
  return Cookies.remove("Access-Token");
}

export function storeLocal(key,value) {
  return localStorage.setItem(key,value)
}

export function getLocal(key) {
  return localStorage.getItem(key)
}

export function removeLocal(key) {
  return localStorage.removeItem(key)
}