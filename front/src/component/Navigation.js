import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/inscription">
                    <li>Inscription</li>
                </NavLink>
                <NavLink to="/connexion">
                    <li>Connexion</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;