import React from 'react';

import './styles.css';

function Home() {
    return (
        <section>
            <div className="grid-container">
                <div id="my-teams" className="card">
                    <h1 className="card-header">My Teams</h1>
                    <div className="card-body">
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div id="top-5" className="card">
                    <h1 className="card-header">Top 5</h1>
                    <div className="card-body">
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div id="most-picked" className="card">
                    <div className="card-body">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;