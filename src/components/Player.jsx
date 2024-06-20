import { useState } from 'react';

export default function Player({name, symbol, isActive, onChangeName}) {
  const [ playerName, setPlayerName ] = useState(name);
  const [ isEditing, setIsEditing ] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if(isEditing){
      onChangeName(symbol, playerName);
    }
  }

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive && 'active'}>
      <span className="player-info">
        {isEditing ? 
          <input type='text' required value={playerName} onChange={handleInputChange}/> : 
          <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
