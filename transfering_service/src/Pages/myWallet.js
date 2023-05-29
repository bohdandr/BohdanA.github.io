import React, { Component } from "react"
import "../sass/myWallet.scss"
import axios from 'axios';

export default class myWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: '',
            valueWithdrawal: '',
            valueReplenishment: '',
            successMessage: "",                                            //---
        };
        this.handleWithdrawalChange = this.handleWithdrawalChange.bind(this);
        this.handleReplenishmentChange = this.handleReplenishmentChange.bind(this);
        this.handleWithdrawalSubmit = this.handleWithdrawalSubmit.bind(this);
        this.handleReplenishmentSubmit = this.handleReplenishmentSubmit.bind(this);
    }

    componentDidMount() {
        const token = sessionStorage.getItem('Authorization');
        if (!token) {
            // this.props.history.push('/login');
            window.location.href = './login';
        }
        axios.get(`http://localhost:5000/api/v1/user/wallet/self`, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                const user = response.data;
                this.setState({
                    walletData: user.wallet,
                });
            })
            .catch(error => {
                console.error(error);
            });

    }

    handleWithdrawalChange(event) {
        this.setState({ valueWithdrawal: event.target.value });
    }

    handleReplenishmentChange(event) {
        this.setState({ valueReplenishment: event.target.value });
    }

    handleWithdrawalSubmit(event) {
        event.preventDefault();
        const token = sessionStorage.getItem('Authorization');
        if (!token) {
            // this.props.history.push('/login');
            window.location.href = './login';
        }
        const { valueWithdrawal } = this.state;
        axios.put(`http://localhost:5000/api/v1/user/withdraw`, { valueWithdrawal }, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                // alert("Your withdrawal is successfully finished");
                this.setState({ successMessage:"Your_withdrawal_is_successfully_finished"});                      //---
                // this.props.history.push('./mywallet');
                window.location.href = '/mywallet';
            })
            .catch(error => {
                alert(error)
                console.error(error);
            });
    }

    handleReplenishmentSubmit(event) {
        event.preventDefault();
        const token = sessionStorage.getItem('Authorization');
        if (!token) {
            // this.props.history.push('/login');
            window.location.href = './login';
        }
        const { valueReplenishment } = this.state;
        console.log(valueReplenishment)
        axios.put(`http://localhost:5000/api/v1/user/replenish`, { valueReplenishment }, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                alert("Your replenishment is successfully finished");
                // this.props.history.push('/mywallet');
                window.location.href = '/mywallet';
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {

        const { successMessage } = this.state;

        return (
            <div className="user-bank-cabinet">
                <h1 className="user-bank-cabinet__title">Bank Account Information</h1>
                <div className="user-bank-cabinet__balance">
                    <h2 className="user-bank-cabinet__subtitle">Balance</h2>
                    <p className="user-bank-cabinet__balance-amount">{this.state.walletData} USD</p>
                    <div className="form-row">
                        <div className="form-wrapper">
                            <form onSubmit={this.handleWithdrawalSubmit} className="form-wrapper">
                                <label>
                                    Withdrawal amount:
                                    <input type="number" value={this.state.valueWithdrawal} onChange={this.handleWithdrawalChange} data-testid="withdrawal" />
                                </label>
                                <button data-testid="withdraw" type="submit">Withdraw</button>
                                {successMessage && <div>{successMessage}</div>}                     //---
                            </form>
                        </div>
                        <div className="form-wrapper">
                            <form onSubmit={this.handleReplenishmentSubmit}>
                                <label>
                                    Replenish amount:
                                    <input type="number" value={this.state.valueReplenishment} onChange={this.handleReplenishmentChange} />
                                </label>
                                <button type="submit">Replenish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}