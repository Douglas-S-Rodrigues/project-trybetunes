import React from 'react';
import Loading from '../pages/Loading';

const userAPI = require('../services/userAPI');

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,

    }, async () => {
      this.setState({
        userName: await userAPI.getUser(),
        loading: false });
    });
  }

  render() {
    const {
      loading,
      userName,
    } = this.state;

    return (
      loading
        ? <Loading /> : (
          <header data-testid="header-component">
            <h2 data-testid="header-user-name">{ userName.name }</h2>
          </header>
        )
    );
  }
}

export default Header;
