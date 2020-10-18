import React from 'react';

import './styles.css';

function Home() {
    return (
        <section>
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
        </section>
    )
}

export default Home;