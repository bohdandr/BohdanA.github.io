import React, { Component } from 'react';

export default class ForgotPassword extends Component {

  handleSubmit = (event) => {
    event.preventDefault();


    const email = event.target.email.value;

    console.log('Reset Password:', email);

    alert('Password reset instructions sent to your email!');
  };

  render() {
    return (
      <div>
        <h1>Forgot Password</h1>
        <p>Please enter your email address below to reset your password:</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required className="input-field" />
          </div>
          <button type="submit" className="btn btn-primary">Reset Password</button>
        </form>
      </div>
    );
  }
}