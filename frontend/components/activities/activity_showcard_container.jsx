import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activities";
import { fetchCurrentUserRoutes } from "../../actions/gRoute";
import ActivityShowcard from "./activity_showcard";

const mapState = (state) => ({
  activities: state.entities.activities,
  routes: state.entities.routes,
});
const mapDispatch = (dispatch) => ({
  fetchActivities: () => dispatch(fetchActivities()),
  fetchRoutes: () => dispatch(fetchCurrentUserRoutes()),
});

export default connect(mapState, mapDispatch)(ActivityShowcard);
