import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faShareAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

interface TeamProps {
    // id: number;
    name: string;
    desc: string;
}

const Team: React.FC<TeamProps> = (team) => {
    return (
        <table className="team">
            <tr>
                <td><span id="name">{team.name}</span></td>
                <td>
                    <div id="description">
                        <span>{team.desc}</span>
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
    );
}

export default Team;