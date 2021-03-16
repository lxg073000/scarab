import {
  API_userSignup,
  API_sessionLogin,
  API_sessionLogout,
} from "../util/session";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};
export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const signup = (user) => (dispatch) =>
  API_userSignup(user).then((user) => dispatch(receiveCurrentUser(user)));
export const login = (user) => (dispatch) =>
  API_sessionLogin(user).then((user) => dispatch(receiveCurrentUser(user)));
export const logout = () => (dispatch) =>
  API_sessionLogout().then(() => dispatch(logoutCurrentUser()));
