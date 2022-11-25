import React from 'react';
import { NavLink } from "react-router-dom";

const Retour = () => {
    return (
        <div className='retour'>
            <NavLink to="/">
                <p>Retour</p>
            </NavLink>
        </div>
    );
};

export default Retour;