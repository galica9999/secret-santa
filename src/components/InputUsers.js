import React, { useState } from 'react';

const InputUsers = ({ users, setUsers }) => {
  const [userInput, setUserInput] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (Object.keys(users).includes(userInput)) {
        alert('Person already exists');
      } else {
        const newPerson = userInput;
        setUsers((users) => ({ ...users, [newPerson]: '' }));
        setUserInput('');
      }
    }
  };

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="">Input new person:</label>
        <input
          type="text"
          onKeyPress={handleKeyPress}
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
      </div>
    </div>
  );
};

export default InputUsers;
