import React from 'react';
//import { NavLink } from 'react-router-dom';
import { useState } from "react";

function Formulaire() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [username, setUsername] = useState("");
    const [taille_cm, setTaille] = useState("");
    const [poids, setPoid] = useState("");
    const [age, setAge] = useState("");
    const [sexe, setSexe] = useState("");
    const [frequence_sport, setfrsq] = useState("");
    const [password, setPass] = useState("");
    const [password2, setPass2] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:8000/api/inscription", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
              
              "username": username,
              "password" : password,
              "password2" : password2,
              "nom": nom,
              "prenom": prenom,
              "taille_cm": taille_cm,
              "poids": poids,
              "age" : age,
              "frequence_sport": frequence_sport,
              "sexe": sexe,
            }),
          })
          .then((data) => {
            if (data.status === 200) {
              alert("Register successful");
              window.localStorage.setItem("token", data.data);
              window.location.href = "/connexion";
            } else {
                alert("Register error");
              }
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setNom("");
            setPrenom("");
            setUsername("");
            setTaille("");
            setPoid("");
            setAge("");
            setSexe("");
            setfrsq("");
            setPass("");
            setPass2("");
            
          } else {
            console.log("else")
          }
        } catch (err) {
          console.log(err);
        }
      };
      
    return (
        
        <div className='formulaire'>
          <form method="post" >
            <div className='container-form'>
              <div>
                <label htmlFor="sexe">Genre </label>
                <input type="text" value={sexe} id="sexe"  onChange={(e) => setSexe(e.target.value)} />
              </div>
              <div>
              <label htmlFor="prenom">Prénom </label>
                <input type="text"  value={prenom} id="prenom"  onChange={(e) => setPrenom(e.target.value)} />
              </div>
              <div>
                <label htmlFor="nom">Nom </label>
                <input type="text" value={nom} id="nom"  onChange={(e) => setNom(e.target.value)} />
              </div>
              <div>
                <label htmlFor="username">Pseudo </label>
                <input type="text"  value={username} id="username"  onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <label htmlFor="age">Âge </label>
                <input type="number" value={age} id="age"  onChange={(e) => setAge(e.target.value)} /> <p>(ans)</p>
              </div>
              <div>
                <label htmlFor="taille_cm">Taille </label>
                <input type="number"  value={taille_cm} id="taille_cm"  onChange={(e) => setTaille(e.target.value)} /> <p>(cm)</p>
              </div>
              <div>
                <label htmlFor="poids">Poids </label>
                <input type="number"  value={poids} id="poids"  onChange={(e) => setPoid(e.target.value)} /> <p>(kg)</p>
              </div>
              <div>
                <label htmlFor="frequence_sport" id="fq-sport">Fréquence Sport </label>
                <input type="text"  value={frequence_sport} id="frequence_sport"  onChange={(e) => setfrsq(e.target.value)} /> <p>(jour(s)/semaine)</p>
              </div>
              <div>
                <label htmlFor="password" id="psw-label-1">Choisissez un mot de passe </label>
                <input type="password"  value={password} id="password"  onChange={(e) => setPass(e.target.value)} /> <p>(Min 8 caractères avec au moins une majuscule, une minuscule et un chiffre.)</p>
              </div>
              <div>
                <label htmlFor="password2" id="psw-label-2">Confirmez votre mot de passe </label>
                <input type="password"  value={password2} id="password2"  onChange={(e) => setPass2(e.target.value)} />
              </div>
              <div className="submit-btn">
                <div className="submit-txt" onClick={handleSubmit}>Create</div>
              </div>
            </div>
                {/* <NavLink to="/traitement">
                    <p>s'inscrire</p>
                </NavLink> */}
            </form>
        </div>
    );
};

export default Formulaire;