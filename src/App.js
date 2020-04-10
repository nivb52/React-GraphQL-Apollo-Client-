import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import LaunchesPast from './views/LaunchesPast';
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">on air</header>
      </div>
      <div className="App-container">
        <LaunchesPast />
      </div>
    </ApolloProvider>
  );
}

export default App;
