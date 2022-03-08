import React from 'react';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="loginName">
            <input type="text" data-testid="login-name-input" id="login-name" />
          </label>
          <button type="submit" data-testid="login-submit-button"> Entrar </button>
        </form>
      </div>
    );
  }
}

export default Login;
