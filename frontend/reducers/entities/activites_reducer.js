import {
  RECEIVE_ACTIVITIES,
  RECEIVE_ACTIVITY,
  REMOVE_ACTIVITY,
} from "../../actions/activities";
import { LOGOUT_CURRENT_USER } from "../../actions/session";

const ActivitiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      nextState = Object.assign({}, nextState, action.activities);
      return action.activities;
    case RECEIVE_ACTIVITY:
      nextState = Object.assign({}, nextState, {
        [action.activity.id]: action.activity,
      });
      return nextState;
    case REMOVE_ACTIVITY:
      delete nextState[action.activity_id.id];
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default ActivitiesReducer;
