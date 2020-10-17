import React from 'react';

import './styles.css';
import logo from '../../assets/images/logo.png';

function Home() {
    return (
        <div>
            <header>
                <div id="app-info">
                    <img src={logo} alt="Venturus Logo"/>
                    <h2><strong>Squad Management Tool</strong></h2>
                </div>
                <div id="user-info">
                    <h4><strong>Flavio Augusto</strong></h4>
                    <img 
                        src="https://avatars1.githubusercontent.com/u/35996925?s=460&u=1930c3dc11fc29d82cdd77b153b378ff904025a5&v=4" 
                        alt="User avatar icon."
                    />
                </div>
            </header>
            
            <div className="box">
                <div className="grid-container">
                    <div className="card my-teams">
                        <h1 className="card-header">My Teams</h1>
                        <div className="card-body">
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div className="card top-5">
                        <h1 className="card-header">Top 5</h1>
                        <div className="card-body">
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div className="card most-picked">
                        <h5 className="card-header">Special title treatment</h5>
                        <div className="card-body">
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>

                <footer>
                    <span>2020 - All rights reserved</span>
                </footer>
            </div>
        </div>
    )
}

export default Home;