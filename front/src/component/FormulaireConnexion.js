import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from "react";


function FormulaireConnexion() {
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:8000/api/token", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
              
              "username": username,
              "password" : password,
            }),
          })
          .then((data) => {
            if (data.status === 200) {
              alert("login successful");
              window.localStorage.setItem("token", data.data);
              window.location.href = "/id/"+username;
            } else {
                alert("login error");
              }
          });
          let resJson = await res.json();
          if (res.status === 200) {
            
            setUsername("ok");
            setPass("ok");
            
          } else {
            console.log("else")
          }
        } catch (err) {
          console.log(err);
        }
      };
      
// }
// const FormulaireConnexion = () => {
//     const initialFormData = Object.freeze({
//         email: '',
//         password: '', 
//     });
    return (
        <div className='formulaireConnexion'>
          <form method="post" action="Identifiant.js">
            <div className='container-form'>
              <div>
                <label for="username">Pseudo </label>
                <input type="text"  value={username} id="username"  onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <label for="password" id="psw-txt">Mot de passe </label>
                <input type="password"  value={password} id="password"  onChange={(e) => setPass(e.target.value)} />
              </div>

              <div className="submit-btn">
                <div className="submit-txt" onClick={handleSubmit}>Se Connecter</div>
              </div>
            </div>
                
                {/* possible de faire du jinja ? */}
                {/* <NavLink to="/id">
                    <p>Se connecter</p>
                </NavLink> */}

            </form>
        </div>
    );
};

export default FormulaireConnexion;