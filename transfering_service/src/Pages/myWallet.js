import React, { Component } from "react"
import "../sass/myWallet.scss"

export default class myWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        };
    }

    componentDidMount() {
        const token = sessionStorage.getItem('Authorization');

        fetch('/api/transaction/sent', {
            headers: {
                Authorization: token
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ transactions: data }))
            .catch(error => console.error(error));
    }
    render() {
        const transactionItems = this.state.transactions.map(transaction => {
            return (
                <li key={transaction.id}>
                    <div>{transaction.sender}</div>
                    <div>{transaction.recipient}</div>
                    <div>{transaction.amount}</div>
                    <div>{transaction.timestamp}</div>
                </li>
            );
        });
        return (
            <body>
                <div class="container">
                    <div class="buttons">
                        <h1 class="user-cabinet-title">User Cabinet</h1>
                        <div class="panel-container">
                            <div class="panel">
                                <h2>Balance</h2>
                                <p>Тут міститься інформація для першої панелі</p>
                                <button class="btn-primary">Your Balance: "102034"</button>
                                <button>Кнопка 2</button>
                                <button>Кнопка 3</button>
                            </div>
                            <div class="panel">
                                <h2>Pay Online</h2>
                                <p>Тут міститься інформація для другої панелі</p>
                                <button>Кнопка 1</button>
                                <button>Кнопка 2</button>
                                <button>Кнопка 3</button>
                            </div>
                            <div class="panel">
                                <h2>Widrawal History</h2>
                                <p>Тут міститься інформація для третьої панелі</p>
                                <ul>
                                    {transactionItems}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}