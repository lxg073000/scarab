export const RECEIVE_BUGGOUTS = "RECEIVE_BUGGOUTS";
export const RECEIVE_BUGGOUT = "RECEIVE_BUGGOUT";
export const REMOVE_BUGGOUT = "REMOVE_BUGGOUT";
export const RECEIVE_BUGGOUT_ERRORS = "RECEIVE_BUGGOUT_ERRORS";
export const CLEAR_BUGGOUT_ERRORS = "CLEAR_BUGGOUT_ERRORS";

import {
  API_fetchBuggouts,
  API_createBuggout,
  API_updateBuggout,
  API_deleteBuggout,
} from "../util/buggouts";

export const receiveBuggouts = (buggouts) => ({
  type: RECEIVE_BUGGOUTS,
  buggouts,
});
export const receiveBuggout = (buggout) => ({
  type: RECEIVE_BUGGOUT,
  buggout,
});
export const removebuggout = (buggout_id) => ({
  type: REMOVE_BUGGOUT,
  buggout_id,
});
export const receiveBuggoutErrors = (errors) => ({
  type: RECEIVE_BUGGOUT_ERRORS,
  errors,
});
export const clearbuggoutErrors = () => ({
  type: CLEAR_buggout_ERRORS,
});

export const fetchBuggouts = () =>
  function (dispatch) {
    return API_fetchBuggouts().then(
      (buggouts) => dispatch(receiveBuggouts(buggouts)),
      (errors) => dispatch(receiveRouteErrors(errors.responseJSON))
    );
  };

export const createBuggout = (buggout) =>
  function (dispatch) {
    return API_createBuggout(buggout).then(
      (buggout) => dispatch(receiveBuggout(buggout)),
      (errors) => dispatch(receiveBuggoutErrors(errors.responseJSON))
    );
  };
export const updateBuggout = (buggout) =>
  function (dispatch) {
    return API_updateBuggout(buggout).then(
      (buggout) => dispatch(receiveBuggout(buggout)),
      (errors) => dispatch(receiveBuggoutErrors(errors.responseJSON))
    );
  };
export const deleteBuggout = (buggout) =>
  function (dispatch) {
    return API_deleteBuggout(buggout).then(
      (buggout) => dispatch(removeBuggout(buggout)),
      (errors) => dispatch(receiveBuggoutErrors(errors.responseJSON))
    );
  };
