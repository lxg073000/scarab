import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../user/user_profile_card";

export default class onboarding_form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser);
  }
  componentDidUpdate() {
    // this.props.receiveCurrentUser(this.props.currentUser.id);
    console.log(this.state.currentUser);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { defaultRoute, currentUser } = this.props;
    return (
      <div className="fullscreen-main">
        <div className="primary-main">
          <div className="main-sidebar">
            <div className="profile-container">
              <div className="insert-box">
                <UserInfo user={currentUser} />
                <Link className="main-form-btn" to={`/routes`}>
                  DefaultRoute
                </Link>
              </div>
            </div>
            <div className="trip-container"></div>
          </div>
          <div className="main-primary-content">
            <div className="onboard-modal-form main-container">
              <form>
                <h1 className="main-headline">Create your profile</h1>
                <h3 className="main-content">
                  This will give you a place to store your buggouts and help
                  your colony find you.
                </h3>
                <div className="modal-row">
                  <div className="item-label-container">
                    <p>First Name</p>
                    <input className="main-form-field" type="text"></input>
                  </div>
                  <div className="item-label-container">
                    <p>Last Name</p>
                    <input className="main-form-field" type="text"></input>
                  </div>
                </div>
                <div className="modal-row">
                  <div className="bday">
                    <p>Birthday</p>
                    <input type="date"></input>
                    <div className="ob-dropdowns">
                      <select className="main-form-field">
                        <option value="0">MM</option>
                        <option value="1">JAN</option>
                        <option value="2">FEB</option>
                        <option value="3">MARCH</option>
                        <option value="4">APRIL</option>
                        <option value="5">MAY</option>
                        <option value="6">JUNE</option>
                        <option value="7">JULY</option>
                        <option value="8">AUG</option>
                        <option value="9">SEPT</option>
                        <option value="10">OCT</option>
                        <option value="11">NOV</option>
                        <option value="12">DEC</option>
                      </select>
                      <select className="main-form-field">
                        <option value="0">DD</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select className="main-form-field">
                        <option value="0">YYYY</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                      </select>
                    </div>
                  </div>
                  <div className="gender">
                    <p>Gender</p>
                    <div className="ob-dropdowns">
                      <select className="main-form-field">
                        <option value=""></option>
                        <option value="male">MALE</option>
                        <option value="female">FEMALE</option>
                        <option value="queer">OTHER</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="submit-footer">
                  <button className="nav-btn-orange">Continue</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
