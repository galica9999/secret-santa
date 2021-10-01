import React from 'react';

const FindMatches = ({ users, setUsers }) => {
  const handleClear = (e) => {
    e.preventDefault();
    setUsers((users) => (users = {}));
  };

  const handleRandomize = (e) => {
    e.preventDefault();
    if (Object.keys(users).length % 2 !== 0) {
      alert('not even bitches');
    } else {
      let userKeys = Object.keys(users);
      //   pickRandom(userKeys.length, users, setUsers, userKeys);
      Object.keys(users).map((user) => {
        let randNum = Math.floor(Math.random() * userKeys.length);
        if (user === userKeys[randNum]) {
          while (user === userKeys[randNum]) {
            randNum = Math.floor(Math.random() * userKeys.length);
          }
        }
        let randoUser = userKeys[randNum];
        console.log(randoUser);
        setUsers((users) => (users = { ...users, [user]: randoUser }));
        userKeys.splice(randNum, 1);
      });
    }
  };

  return (
    <div>
      <button className="ui positive basic button" onClick={handleRandomize}>
        Randomize
      </button>
      <button className="ui negative basic button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default FindMatches;
