import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Team from '../../components/Team';
import Card from '../../components/Card';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function Home() {
    // const [teams, setTeams] = useState([]);

    return (
        <section>
            <div className="grid-container">
                <Card name="my-teams">
                    <div className="header">
                        <h1>My teams</h1>
                        <Link to="/newTeam" className="add-button">
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        </Link>
                    </div>
                    <div className="body">
                        <Team 
                            name="Barcelona"
                            desc="Barcelona Squad"
                        />
                        <Team 
                            name="Real"
                            desc="Real Madrid Squad"
                        />
                    </div>
                </Card>
                <Card name="top-5">
                    <div className="header">
                        <h1>Top 5</h1>
                    </div>
                    <div className="body">
                        <p className="text"> A list of teams here.</p>
                    </div>
                </Card>
                <Card name="most-picked">
                    <div className="body">
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default Home;