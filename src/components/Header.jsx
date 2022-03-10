import React from 'react';
import { Link } from 'react-router-dom';
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
      <div>
        { loading ? <Loading /> : (
          <header data-testid="header-component">
            <h2 data-testid="header-user-name">{ userName.name }</h2>
          </header>
        )}
        <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
      </div>
    );
  }
}

export default Header;
