import React, { Component } from "react";
import "../sass/profile.scss";
import axios from 'axios';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthdate: "",
    };
  }

  componentDidMount() {
    const token = sessionStorage.getItem('Authorization');
    if (!token) {
        this.props.history.push('/login');
    }
    axios.get(`http://localhost:5000/api/v1/user/info/self`, {
        headers: {
            Authorization: token
        }
    })
        .then(response => {
            const user = response.data;
            console.log(user)
            this.setState({
                username:user.username,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                phone:user.phone,
                birthDate:user.birthDate
            });
        })
        .catch(error => {
            console.error(error);
        });

}

  render() {
    return (
        <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-info">
          <div className="profile-item">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={this.state.username} disabled />
          </div>
          <div className="profile-item">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" value={this.state.firstName} disabled />
          </div>
          <div className="profile-item">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" value={this.state.lastName} disabled />
          </div>
          <div className="profile-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={this.state.email} disabled />
          </div>
          <div className="profile-item">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={this.state.phone} disabled />
          </div>
          <div className="profile-item">
            <label htmlFor="birthdate">Birthdate</label>
            <input type="date" id="birthdate" name="birthdate" value={this.state.birthDate} disabled />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;