import React from 'react';
import './App.css';
import environment from './RelayEnvironment';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
// import CharacterCards from './components/CharacterCards';
import CharacterGraph from './components/CharacterGraph';

const App = () => {
  
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery {
          characters {
            id
            name
            bio
          }  
        }
      `}
      variables={{}}
      render={({error, props}) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        // return <CharacterCards characters={props.characters} />
        return <CharacterGraph characters={props.characters} />
      }}
    />
  );
}

export default App;
