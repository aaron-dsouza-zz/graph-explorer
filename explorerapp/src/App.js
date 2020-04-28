import React, {useState} from 'react';
import './App.css';
import Person from './components/Person';
import Form from './components/Form';


const App = () => {
  const [profiles, setProfiles] = useState([]);
  const updateProfiles = (profileData) => {
    setProfiles(profileData);
  }
  return (
    <div className="App">
      <Form onSubmit={updateProfiles} />
      <div>
        {profiles.map(profile => <Person key={profile.id} {...profile}/>)}
      </div>
    </div>
  );
}

export default App;
