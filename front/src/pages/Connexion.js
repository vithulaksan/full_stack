import React from 'react';
import FormulaireConnexion from '../component/FormulaireConnexion';
import Retour from '../component/Retour';

const Connexion = () => {
    return (
        <div className='connexion'>
            <h1>Connexion</h1>
            <FormulaireConnexion/>
            <Retour/>
        </div>
    );
};

export default Connexion;