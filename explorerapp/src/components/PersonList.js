import React from 'react';
import Person from './Person';

const PersonList = (props) => (
    <div>
  	{props.profiles.map(profile => <Person key={profile.id} {...profile}/>)}
	</div>
);

export default PersonList;