import { connect } from "react-redux";
import { fetchActivities, updateActivity } from "../../actions/activities";
import { fetchCurrentUserRoutes } from "../../actions/gRoute";
import ActivityEdit from "./activity_form_edit";

const mapState = (state) => {
  return {
    activities: state.entities.activities,
    routes: state.entities.routes,
  };
};
const mapDispatch = (dispatch) => ({
  fetchActivities: () => dispatch(fetchActivities()),
  fetchRoutes: () => dispatch(fetchCurrentUserRoutes()),
  updateActivity: (activity) => dispatch(updateActivity(activity)),
});

export default connect(mapState, mapDispatch)(ActivityEdit);
