import { connect } from "react-redux";
import { fetchActivities, createActivity } from "../../actions/activities";
import { fetchCurrentUserRoutes } from "../../actions/gRoute";
import ActivityNew from "./activity_form_new";

const mapState = (state) => {
  return {
    activities: state.entities.activities,
    routes: state.entities.routes,
  };
};
const mapDispatch = (dispatch) => ({
  fetchActivities: () => dispatch(fetchActivities()),
  fetchRoutes: () => dispatch(fetchCurrentUserRoutes()),
  createActivity: (activity) => dispatch(createActivity(activity)),
});

export default connect(mapState, mapDispatch)(ActivityNew);
