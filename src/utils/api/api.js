import request from "../request";

export const doLogin = (data) => {
  const url = "auth/login";
  return request({
    url,
    data,
    method: "post",
  });
};