import './App.css';
import playerData from './data/data.json';
import React, { useEffect, useState } from 'react';
import Players from './components/Players/Players';
import Team from './components/Team/Team';

function App() {
  const [players, setPlayers]  = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
  }, [])

  const handleAddPlayer = (player) => {
    const newTeam = [...team, player];
    setTeam(newTeam);
  };

  return (
    <div className="App">
      <h1>Total Player to choose from {players.length}</h1>
      <Team team={team}></Team>
      <ul>
        {
          players.map(player => <Players player={player} handleAddPlayer={handleAddPlayer}  key={player.id}></Players>)
        }
      </ul>
    </div>
  );
}

export default App;
