import React, { Component } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import '../sass/logout.scss';

class LogoutButton extends React.Component {
  handleLogout = () => {
    // Remove the authentication token from sessionStorage
    sessionStorage.removeItem('authToken');

    // Redirect the user to the login page
    const { history } = this.props;
    // history.push('/login');
    window.location.href = './';
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Logout</button>
    );
  }
}

export default LogoutButton;