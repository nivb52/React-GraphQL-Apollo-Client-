import React from 'react';
import './App.css';

import ApolloClient from "apollo-boost";
import  gql  from "graphql-tag";
import { ApolloProvider, ApolloConsumer  } from "react-apollo";

const client = new ApolloClient ({
  uri: 'https://api.spacex.land/graphql/'
});

function App() {
  return (
    <ApolloProvider client = {client}> 
    <div className="App">
      <header className="App-header">
        on air
      </header>
    </div>
    <ApolloConsumer>
      {
        client => {
          client.query ({
            query: gql`
             query GetLaunch
            {
              launchesPast(limit: 10) {
                mission_name
                launch_date_local
              }
            }
           `
          }).then (res => console.log(res))
          return null
        }
      }
    </ApolloConsumer>
  </ApolloProvider>
  );
}

export default App;
