import React from 'react';
import './cards.css'

import 'tachyons';

const cards = ({ id, name, email }) => {
    return (
        <div className="bg-light-green dib bor_der br3 pa3 ma2 grow shadow-5">
            <img src={`https://robohash.org/${name}?200x200`} alt="RoboFriends" className="hei_ght"></img>
            <div className="tc">{id}</div>
            <h2 className="tc">{name}</h2>
            <div className="tc">{email}</div>
        </div>

    );

}

export default cards;