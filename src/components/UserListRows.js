import React from 'react';

const UserListRows = ({ users }) => {
  return (
    <tbody>
      {Object.keys(users).map((user, index) => {
        return (
          <tr key={user} className={index % 2 ? 'positive' : 'negative'}>
            <td>{user}</td>
            <td>{users[user]}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default UserListRows;
