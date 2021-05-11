import React from 'react';
import './Team.css'

const Team = (props) => {
    const team = props.team;
    const totalSalary = team.reduce( (sum, player) => sum + player.salary, 0)
    return (
        <div className="header-style">
            <h4>Player added in the team: {team.length}</h4>
// Add h4 playername {' '}
            <h4>Total Salary: ${totalSalary}</h4>
        </div>
    );
};

export default Team;
