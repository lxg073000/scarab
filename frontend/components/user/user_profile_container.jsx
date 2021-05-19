import { connect } from "react-redux";
// import {} from "../../actions/user";
import UserProfileCard from "./user_profile_card";

const mapState = (state) => ({
  user: Object.values(state.entities.user),
});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(UserProfileCard);
