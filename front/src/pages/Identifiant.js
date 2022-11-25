import React from 'react';
import Courbe from '../component/Courbe';
import Deconnecter from '../component/Deconnecter';
import IdClient from '../component/IdClient';
import ModifierBtn from '../component/ModifierBtn';

const Identifiant = () => {
    return (
        <div className='identifiant'>
            <IdClient/>
            <Deconnecter/>
            <ModifierBtn/>
            <Courbe/>
        </div>
    );
};

export default Identifiant;