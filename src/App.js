import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import LaunchesPast from './views/LaunchesPast';
import LaunchDetails from './views/LaunchDetails';
import AddUser from './views/AddUser';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
            SpaceX Graph-QL
            <nav>
              <ul>
                <li>
                  <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + '/add-user'}>
                    Add User
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="App-container">
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              component={LaunchesPast}
            />
            <Route
              path={process.env.PUBLIC_URL + '/launch/:id'}
              component={LaunchDetails}
            />
            <Route
              path={process.env.PUBLIC_URL + '/add-user'}
              component={AddUser}
            />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
