import React from 'react';
import '../sass/logout.scss';

class LogoutButton extends React.Component {
  handleLogout = () => {
    sessionStorage.removeItem('authToken');

    window.location.href = './';
    
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Logout</button>
    );
  }
}

export default LogoutButton;