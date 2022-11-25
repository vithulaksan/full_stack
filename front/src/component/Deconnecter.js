import React from 'react';
import { NavLink } from "react-router-dom";

const Deconnecter = () => {
    return (
        <div className='deconnecter'>
            <NavLink to="/connexion">
                <p>Se déconnecter</p>
            </NavLink>
        </div>
    );
};

export default Deconnecter;