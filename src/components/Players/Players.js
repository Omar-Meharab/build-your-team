import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Player.css'

const Players = (props) => {
    const { name, salary, team, image } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player-cards">
            <div>
                <img className="image" src={image} alt="" />
            </div>
            <div className="player-bio">
                <h4>Player Bio</h4>
                <p>Player Name: {name}</p>
                <p>Salary: {salary}</p>
                <p>Old Team: {team}</p>
                <Button variant="primary" onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faPlus} />Add Player</Button>{' '}
            </div>

        </div>
    );
};

export default Players;