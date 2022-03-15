import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Loading from './pages/Loading';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route
              path="/album/:id"
              render={ (props) => <Album { ...props } /> }
            />
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/profile/edit" exact>
              <ProfileEdit />
            </Route>
            <Route path="/Loading">
              <Loading />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
