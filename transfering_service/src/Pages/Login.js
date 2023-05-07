import React, { Component } from "react"
import "../sass/contact.scss"
import { useState } from 'react';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
    
        const { username, password } = this.state;
        const credentials = `${username}:${password}`;
        const encodedCredentials = btoa(credentials);
    
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${encodedCredentials}`,
            }
        };
    
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/v1/user_login`, options);
            const json = await response.json();
            sessionStorage.setItem('Authorization', `Basic ${encodedCredentials}`); 
            alert(json.message);
            window.location.href = './index.html';
        } catch (error) {
            alert('Invalid username or password');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleUsernameChange} required className="input-field" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} required className="input-field" />
                </div>
                <button type="submit" className="btn btn-primary" id="login-button">Login</button>
            </form>
        )
    }
}




