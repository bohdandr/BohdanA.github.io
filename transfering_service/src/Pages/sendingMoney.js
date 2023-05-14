import React, { Component } from 'react';
import '../sass/sendingMoney.scss';

class sendingMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameTo: '',
            value: '',
            usernameFrom: '',
            token: ''
        };
        this.sendMoney = this.sendMoney.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async sendMoney(event) {
        event.preventDefault();
        const { usernameTo, value, usernameFrom, token } = this.state;
        if (usernameTo === usernameFrom) {
            alert('You are not able to send money to your card');
            return;
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
            body: JSON.stringify({ value })
        };
        const response = await fetch(`http://127.0.0.1:5000/api/v1/transaction/${usernameTo}`, options);
        const json = await response.json();

        if (json.code !== 200) {
            alert(json.error);
        } else {
            alert('Transaction successfully completed');
        }
        window.location.href = '/';
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        const token = sessionStorage.getItem('Authorization');
        const encodedCredentials = token.replace('Basic ', '');
        const decodedCredentials = atob(encodedCredentials);
        const usernameFrom = decodedCredentials.split(':')[0];
        this.setState({ usernameFrom, token });
    }

    render() {
        return (
            <div className="container">
                <main>
                    <div className="main-container">
                        <form className="send-money-form" onSubmit={this.sendMoney}>
                            <h2>Send Money</h2>

                            <div className="form-row">
                                <label htmlFor="usernameto">Receiver's username:</label>
                                <input type="text" id="usernameto" name="usernameTo" onChange={this.handleInputChange} required />
                            </div>

                            <div className="form-row">
                                <label htmlFor="value">Value:</label>
                                <input type="number" id="value" name="value" onChange={this.handleInputChange} required />
                            </div>

                            <div className="form-row">
                                <button type="submit" id="send-money-button">Send Money</button>
                            </div>

                        </form>
                    </div>
                </main>
            </div>
        );
    }
}

export default sendingMoney;