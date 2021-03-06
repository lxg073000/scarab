import {
  API_fetchUser,
  API_userSignup,
  API_sessionLogin,
  API_toggleUserTutorial,
  API_sessionLogout,
} from "../util/session";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const DISMISS_TUTORIAL = "DISMISS_TUTORIAL";
export const TOGGLE_TUTORIAL = "TOGGLE_TUTORIAL";
export const RESET_TUTORIAL_STATUS = "RESET_TUTORIAL_STATUS";
export const RECEIVE_TUTORIAL_STATUS = "RECEIVE_TUTORIAL_STATUS";

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
export const receieveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};
export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
  };
};
export const dismissTutorial = () => {
  return {
    type: DISMISS_TUTORIAL,
  };
};
export const toggleTutorial = (status) => {
  return {
    type: TOGGLE_TUTORIAL,
    status,
  };
};
export const receiveTutoralStatus = () => {
  return {
    type: RECEIVE_TUTORIAL_STATUS,
  };
};
export const resetTutoralStatus = () => {
  return {
    type: RESET_TUTORIAL_STATUS,
  };
};

export const fetchUser = (userID) => (dispatch) =>
  API_fetchUser(userID).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receieveSessionErrors(errors.responseJSON))
  );
export const signup = (user) => (dispatch) =>
  API_userSignup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receieveSessionErrors(errors.responseJSON))
  );
export const login = (user) =>
  function (dispatch) {
    return API_sessionLogin(user).then(
      (user) => dispatch(receiveCurrentUser(user)),
      (errors) => dispatch(receieveSessionErrors(errors.responseJSON))
    );
  };
export const toggleUserTutorial = (user, status) =>
  function (dispatch) {
    return API_toggleUserTutorial(user, status).then((status) =>
      dispatch(toggleTutorial(status))
    );
  };

export const logout = () => (dispatch) =>
  API_sessionLogout().then(() => dispatch(logoutCurrentUser()));
