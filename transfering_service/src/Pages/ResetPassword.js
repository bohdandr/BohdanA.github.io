import React, { Component } from 'react';

export default class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <h1>Forgot Password</h1>
        <p>Please enter your email address below to reset your password:</p>
        <form>
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