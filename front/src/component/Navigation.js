import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
          <div className="link-container">
            <div className="link-item">
              <NavLink to="/inscription">
                <p>Inscription</p>
              </NavLink>
            </div>
            <div className="link-item">
              <NavLink to="/connexion">
                Connexion
              </NavLink>
            </div>
          </div>
        </div>
    );
};

export default Navigation;