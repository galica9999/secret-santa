import React, { useState } from 'react';
import InputUsers from './InputUsers';
import UserList from './UserList';
import FindMatches from './FindMatches';

const Pane = () => {
  const [users, setUsers] = useState({});

  const clearUsers = () => {
    setUsers((users) => (users = []));
  };

  return (
    <div className="ui container">
      <h3>Randomizer</h3>
      <InputUsers users={users} setUsers={setUsers} />
      <UserList users={users} />
      <FindMatches users={users} setUsers={setUsers} />
    </div>
  );
};

export default Pane;
