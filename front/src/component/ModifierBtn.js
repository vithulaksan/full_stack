import React from 'react';
import { NavLink } from "react-router-dom";

const ModifierBtn = () => {
    return (
        <div className='modifier-btn'>
            <NavLink to="/modifier" className="modifier-txt">
                <p>Modification</p>
            </NavLink>
        </div>
    );
};

export default ModifierBtn;