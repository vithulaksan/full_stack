import React from 'react';
import Courbe from '../component/Courbe';
import Deconnecter from '../component/Deconnecter';
import IdClient from '../component/IdClient';
import ModifierBtn from '../component/ModifierBtn';

const Identifiant = () => {
    return (
        <div className='identifiant'>
            <h1>Mes Informations</h1>
            <IdClient/>
            <div className='container-btn'>
              <div className='btn-item'>
                <ModifierBtn/>
              </div>
              <div className='btn-item'>
                <Deconnecter/>
              </div>
            </div>
            <Courbe/>
        </div>
    );
};

export default Identifiant;