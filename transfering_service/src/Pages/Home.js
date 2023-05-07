import React, { Component } from "react"
import "../sass/style.scss"
import users from "../images/users.png"
import wallet from "../images/wallet3.gif"
import money_transfering from "../images/money_transfering3.gif"

export default class Home extends Component {
  render() {
    return (
        <body>
        <div className="container">
          <main>
            <div className="card-container">
              <div className="card">
                <a href="/update">
                  <img src={users} alt="Card 1"/>
                  <h2>Update user</h2>
                  {/* <h4>List of website users</h4> */}
                </a>
              </div>
              <div className="card">
                <a href="/mywallet">
                  <img src={wallet} alt="Card 2"/>
                  <h2>My Wallet</h2>
                  <h4>Interaction with your card</h4>
                </a>
              </div>
              <div className="card">
                <a href="sendingMoney.html">
                  <img src={money_transfering} alt="Card 3"/>
                  <h2>Send Money</h2>
                  <h4>Make a transaction</h4>
                </a>
              </div>
            </div>
          </main>
        </div>
    
    </body>
    )
  }
}

