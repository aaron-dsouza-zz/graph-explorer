import React from 'react';
import './App.css';
import environment from './RelayEnvironment';
import { graphql } from 'graphql';
import { QueryRenderer } from 'react-relay';
import Character from './components/Character';

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
        return <div>
            {props.characters.map(character => <Character key={character.id} {...character}/>)}
          </div>;
      }}
    />
  );
}

export default App;
