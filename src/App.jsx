import React, { useState, useEffect } from 'react';
import UserCard from './assets/components/Card.jsx';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(user => ({
          username: user.username,
          email: user.email,
          phone: user.phone,
          image: `https://robohash.org/${user.username}.png?size=100x100`
        }));
        setUsers(formattedData);
      })
      .catch(error => console.error('Error fetching the data: ', error));
  }, []);

  return (
    <div className="App">
      <h1>User Cards</h1>
      <div className="user-cards-container">
        {users.map((user, index) => (
          <UserCard
            key={index}
            username={user.username}
            email={user.email}
            phone={user.phone}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
