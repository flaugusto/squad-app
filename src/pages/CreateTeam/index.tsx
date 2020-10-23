import React, {useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';

import './styles.css';

function CreateTeam() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [website, setWebsite] = useState('');
    

    return(
        <div id="create-page">
            <Card name="create-team">
                <div className="header">
                    <h2>Create your team</h2>
                </div>
                <div className="body">
                        <span> TEAM INFORMATION </span> 
                    <fieldset id="">
                        <label> Team name</label>
                        <input id="team-name" value={name}></input>
                        <label>Description</label>
                        <textarea id="team-desc" value={desc}></textarea>
                    </fieldset>

                    <fieldset>
                        <label>Team website</label>
                        <input id="team-website" value={website}></input>
                        <label>Team type</label>
                        <div className="radio-group">
                            <input 
                                type="radio" 
                                id="real" 
                                name="type" 
                                value="real"
                            />
                            <label htmlFor="type">Real</label> 
                            <input 
                                type="radio" 
                                id="fantasy" 
                                name="type" 
                                value="Fantasy"
                            />
                            <label htmlFor="type">Type</label> 
                        </div>
                        <label>Tags</label>
                        <textarea></textarea>
                    </fieldset>
                    
                    <Link to="/">
                        Salvar
                    </Link>
                </div>
            </Card>
        </div>
    );
}

export default CreateTeam;