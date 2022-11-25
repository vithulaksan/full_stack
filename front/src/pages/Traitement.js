import React from 'react';
import { NavLink } from 'react-router-dom';

const Traitement = () => {
    return (
        <div className='Traitement'>
            <h1>Votre compte est crée</h1>
            <NavLink to={"/connexion"}>
                <p>se connecter</p>
            </NavLink>
        </div>
    );
};

export default Traitement;