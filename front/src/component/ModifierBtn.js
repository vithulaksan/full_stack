import React from 'react';
import { NavLink } from "react-router-dom";

const ModifierBtn = () => {
    return (
        <div className='modifier'>
            <NavLink to="/modifier">
                <p>Modification</p>
            </NavLink>
        </div>
    );
};

export default ModifierBtn;