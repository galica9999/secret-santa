import React, { useState } from 'react';
import UserListRows from './UserListRows';

const UserList = ({ users }) => {
  let tableCode = `<tr></tr>`;

  return (
    <>
      <h3 className="header">People</h3>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Giftee</th>
            <th>Receiver</th>
          </tr>
        </thead>
        <UserListRows users={users} />
      </table>
    </>
  );
};

export default UserList;
