import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      loginName: '',
      buttonDisabled: true,
      loading: false,
      save: false,
    };
  }

  onInputChange = ({ target: { value } }) => {
    const MIN_LENGTH_VALUE = 3;
    const validate = value.length;
    this.setState({
      loginName: value,
      buttonDisabled: validate < MIN_LENGTH_VALUE,
    });
  }

  user = async () => {
    const { loginName } = this.state;
    this.setState({
      loading: true });
    await createUser({ name: loginName });
    this.setState({
      loading: false,
      save: true,
    });
  }

  render() {
    const {
      loginName,
      buttonDisabled,
      loading,
      save,
    } = this.state;
    return (
      <div data-testid="page-login">
        { loading
          ? <Loading />
          : (
            <form>
              <label htmlFor="loginName">
                <input
                  type="text"
                  data-testid="login-name-input"
                  value={ loginName }
                  id="loginName"
                  name="loginName"
                  onChange={ this.onInputChange }
                />
              </label>
              <button
                type="button"
                data-testid="login-submit-button"
                disabled={ buttonDisabled }
                onClick={ this.user }
              >
                Entrar
              </button>
            </form>)}
        { save && <Redirect to="/search" /> }
        {/* https://v5.reactrouter.com/web/api/Redirect */}
      </div>
    );
  }
}

export default Login;
