import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faShareAlt } from '@fortawesome/free-solid-svg-icons'


import './styles.css';

function Home() {
    return (
        <section>
            <div className="grid-container">
                <div id="my-teams" className="card">
                    <h1 className="header">My Teams</h1>
                    <div className="body">
                        <table className="team">
                            <tr>
                                <td><span id="name">Barcelona</span></td>
                                <td>
                                    <div id="description">
                                        <span>Barcelona Squad</span>
                                        <div className="buttons-container">
                                            <a href="#" className="delete">
                                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                            </a>
                                            <a href="#" className="share">
                                                <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon>
                                            </a>
                                            <a href="#" className="edit">
                                                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div id="top-5" className="card">
                    <h1 className="header">Top 5</h1>
                    <div className="body">
                        <p className="text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div id="most-picked" className="card">
                    <div className="body">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;