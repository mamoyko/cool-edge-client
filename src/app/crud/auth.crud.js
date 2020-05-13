import axios from "axios";

export const LOGIN_URL = "http://localhost:5000/graphql";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "http://localhost:5000/graphql";

export function query(args) {
  return axios.post(LOGIN_URL, {query: args});
}

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  const args = `query{ me{
        _id
        firstName
        middleName
        lastName
        email
        username
        password
        role
        address
        phone
        created
      }
    }`;
  return axios.post(ME_URL, {query: args});
}
