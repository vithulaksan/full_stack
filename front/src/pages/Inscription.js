import React from 'react';
import Formulaire from '../component/Formulaire';
import Retour from '../component/Retour';

const Inscription = () => {
    return (
        <div className='inscription'>
            <h1>Inscription</h1>
            <Formulaire/>
            <Retour/>
        </div>
    );
};

export default Inscription;