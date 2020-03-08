import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { showProfile } from '../../../redux/actions';


class Profile extends React.Component {
  state = {
    name: '',
    avatar: "https://www.windstream.com/getmedia/b2e4e38a-7cb6-4ca9-9544-54dfeaca6304/icon_user-circle.png?width=1920&height=1280&ext=.png",
    email: '',
    tel: '',
    instagram: '',
    about: '',
    targets: [
      { target: 'Для теста: Run a marathon in 3 mounths' },
      { target: 'Для теста: Start smoking in 21 days' },
      { target: 'Для теста: Learn React in 30 days' }
    ],
  }

  componentDidMount() {
    this.getProfile()
  }

  componentWillUnmount() {

  }

  updateProfile() {

  }

  async getProfile() {
    const profile = await (await fetch(`http://localhost:5000/user/profile/${this.props.isLoggined}`, { method: "POST" })).json();
    this.props.showProfile(profile)
    this.setState(profile)
  }

  renderProfile() {
    const { name, avatar, about, email, tel, instagram, targets } = this.state;
    return (
      <div className="settings">
        <div>
          Имя: <span className="profile">{name}</span>
          <span className="user-logo"><img src={avatar} alt="avatar" /></span>
        </div>
        <div>
          Обо мне: <span className="profile">{about}</span>
        </div>
        <div>
          Мои контакты:
          <span className="profile">{email}</span><br />
          <span className="profile">{tel}</span><br />
          <span className="profile">{instagram}</span><br />
        </div>
        <div>
          Мои цели:
          <span className="profile">
            {targets.map(target => <div>{target.target} </div>)}
          </span><br />
        </div>
      </div>)
  }


  render() {
    return (
      <>
        {this.renderProfile()}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoggined: state.isLoggined,
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  showProfile: (profile) => dispatch(showProfile(profile))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);