import React, { Component } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import '../sass/logout.scss';

const LogoutButton = () => {

    const handleLogout = () => {
      sessionStorage.removeItem('token');
      console.log(sessionStorage.getItem('token'))
    //   window.location.href = '/login';
    };
  
    return (
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    );
  };

export default LogoutButton;