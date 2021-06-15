import { connect } from "react-redux";
import {
  deleteActivity,
  fetchActivities,
  updateActivity,
} from "../../actions/activities";
import { createPost } from "../../actions/posts";
import ActivityIndex from "./activity_index";

const mapState = (state) => {
  return {
    activities: Object.values(state.entities.activities),
  };
};
const mapDispatch = (dispatch) => ({
  fetchActivities: () => dispatch(fetchActivities()),
  createPost: (post) => dispatch(createPost(post)),
  deleteActivity: (activityID) => dispatch(deleteActivity(activityID)),
  updateActivity: (activity) => dispatch(updateActivity(activity)),
});

export default connect(mapState, mapDispatch)(ActivityIndex);
