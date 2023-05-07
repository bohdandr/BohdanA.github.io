import React, { Component } from "react"
import "../sass/dialog.scss"

export default class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            isAdmin: "",
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const {
            username,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            isAdmin,
        } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const data = {
            username,
            firstName,
            lastName,
            email,
            password,
            isAdmin,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(
                "http://127.0.0.1:5000/api/v1/user",
                options
            );
            const json = await response.json();
            if (json.code !== 200) {
                alert(json.error);
            } else {
                alert("User successfully created");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while creating user");
        }
    };

    render() {
        const {
            username,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            isAdmin
        } = this.state;


        return (
            <div className="user-dialog">
                <div className="dialog-header">
                    <h2>Create User Dialog</h2>
                </div>
                <div className="dialog-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                required
                                minLength="5"
                                maxLength="20"
                                pattern="[a-zA-Z][a-zA-Z\d\.-_]{4,120}$"
                                title="Username must be between 5 and 20 characters and contain only letters and numbers."
                                className="input-field"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                required
                                minLength="2"
                                maxLength="20"
                                pattern="[A-Za-z]+"
                                title="firstName must be between 2 and 20 characters and contain only letters."
                                className="input-field"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                required
                                minLength="2"
                                maxLength="20"
                                pattern="[A-Za-z]+"
                                title="lastName must be between 2 and 20 characters and contain only letters."
                                className="input-field"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="input-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                className="input-field"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="input-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                minLength="8"
                                title="Password must contain at least 8 characters"
                                className="input-field"
                                value={password}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="input-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                minLength="8"
                                title="Password must contain at least 8 characters"
                                className="input-field"
                                value={confirmPassword}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="isAdmin">Role</label>
                            <select
                                id="isAdmin"
                                name="isAdmin"
                                required
                                value={isAdmin}
                                onChange={this.handleInputChange}
                            >
                                <option value="">--Select Role--</option>
                                <option value="0">Regular</option>
                                <option value="1">Admin</option>
                            </select>
                        </div>
                        <div className="buttons">
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button>
                            <button type="button" className="btn btn-secondary">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


