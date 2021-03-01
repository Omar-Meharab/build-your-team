import logo from './logo.svg';
import './App.css';
import playerData from './data/data.json';
import React, { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers]  = useState([]);
  useEffect(() => {
    setPlayers(playerData);
    console.log(playerData);
  }, [])

  return (
    <div>
      <h1>this is player: {players.name}</h1>
    </div>
  );
}

export default App;
