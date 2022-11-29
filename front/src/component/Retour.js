import React from 'react';
import { NavLink } from "react-router-dom";

const Retour = () => {
    return (
        <div className='retour-btn'>
            <NavLink to="/" className="retour-txt">
                <p>Retour</p>
            </NavLink>
        </div>
    );
};

export default Retour;