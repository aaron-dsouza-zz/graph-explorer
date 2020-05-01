import React from 'react';
import './CharacterCards.scss';
import Character from '../Character';

const CharacterCards = (props) => (
    <div className="flex-container">
            {props.characters.map(character => <Character key={character.id} {...character}/>)}
    </div>
);

export default CharacterCards;