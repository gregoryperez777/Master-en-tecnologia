import React from 'react';
import ListUsers from './components/ListUsers';
import ListUserV2 from './components/ListUsersV2';

function App() {

  const users = [
    'Agustin Navarro',
    'Carlos Perez',
    'Raul Ruiz',
    'Victoria Gil'
  ];

  const employees = [
    { name: 'Agustin Navarro', years: 26 },
    { name: 'Carlos Perez', years: 29 },
    { name: 'Raul Ruiz', years: 25 },
    { name: 'Victoria Gil', years: 18 },
  ];

  return (
    <div className="App">
      <h1>Mi App</h1>
      {/*<ListUsers listUsers={users} />*/} 
      <ListUserV2 users={employees} /> 
    </div>
  );
}

export default App;
