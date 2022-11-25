import React from 'react';
import { NavLink } from 'react-router-dom';

const FormulaireConnexion = () => {
    return (
        <div className='formulaireConnexion'>
            <form method="post" action="Identifiant.js">
                <label for="email">Votre e-mail :</label>
                <input type="email" name="email" id="email" />
                <br/>
                <label for="pass">Votre mot de passe :</label>
                <input type="password" name="pass" id="pass" />
                <br/>
                <NavLink to="/id">
                    <p>Se connecter</p>
                </NavLink>
            </form>
        </div>
    );
};

export default FormulaireConnexion;