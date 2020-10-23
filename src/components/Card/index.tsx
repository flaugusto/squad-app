import React from 'react';

import './styles.css';

interface CardProps {
    name: string;
}

const Card:React.FC<CardProps> = (props) => {
    return(
        <div id={props.name} className="card">
            {props.children}
        </div>
    )
}

export default Card;