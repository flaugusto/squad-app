import React from 'react';

import Routes from './routes';

import logo from './assets/images/logo.png';

import './assets/styles/global.css';
import './App.css';

function App() {
	return (
        <div id="app">
            <header>
                <div id="app-info">
                    <img 
                        className="venturus-logo" 
                        src={logo} 
                        alt="Venturus Logo"/>
                    <h3 className="app-title"> Squad Management Tool</h3>
                </div>
                <div id="user-info">
                    <h4><strong>Flavio Augusto</strong></h4>
                    <img 
                        className="user-avatar"
                        src="https://avatars1.githubusercontent.com/u/35996925?s=460&u=1930c3dc11fc29d82cdd77b153b378ff904025a5&v=4" 
                        alt="User avatar icon."
                    />
                </div>
            </header>
            <Routes></Routes>
            <footer>
                <span>2020 - All rights reserved</span>
            </footer>
        </div>
	);
}

export default App;
