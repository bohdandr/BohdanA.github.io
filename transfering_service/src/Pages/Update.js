import React, { useState, useEffect, Component } from 'react';
import '../sass/update.scss';
import axios from 'axios';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        };
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const token = sessionStorage.getItem('Authorization');
        if (!token) {
            this.props.history.push('/login');
        }
        axios.get(`http://localhost:5000/api/v1/user/self`, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                const user = response.data;
                this.setState({
                    firstName: user.firstName,
                    lastName: user.lastName,
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }

    handleUpdateSubmit(event) {
        event.preventDefault();
        const token = sessionStorage.getItem('Authorization');
        const { firstName, lastName } = this.state;
        axios.put(`http://localhost:5000/api/v1/user/self`, { firstName, lastName }, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                alert("User information successfully updated");
                this.props.history.push('/');
            })
            .catch(error => {
                console.error(error);
            });
        this.setState({
            firstName: '',
            lastName: '',
        });
    }

    handleDelete(event) {
        event.preventDefault();
        const token = sessionStorage.getItem('Authorization');
        axios.delete(`http://localhost:5000/api/v1/user/self`, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                alert("User information successfully deleted");
                this.setState({
                    firstName: '',
                    lastName: '',
                    password: '',
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleUpdateSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleFirstNameChange} className="input-field" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleLastNameChange} className="input-field" />
                    </div>
                    <button type="submit" className="btn btn-primary" id="update-button">Update</button>
                </form>
                <form onSubmit={this.handleDelete}>
                    <button type="submit" className="btn btn-primary" id="delete-button">Delete</button>
                </form>

            </>
        );
    }
}

export default Update;
