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
            <form method="post"  onSubmit={handleSubmit}>
                <label for="nom">Votre nom :</label>
                <input type="text" value={nom} id="nom"  onChange={(e) => setNom(e.target.value)} />
                <br/>
                <label for="prenom">Votre prénom :</label>
                <input type="text"  value={prenom} id="prenom"  onChange={(e) => setPrenom(e.target.value)} />
                <br/>
                <label for="username">username:</label>
                <input type="text"  value={username} id="username"  onChange={(e) => setUsername(e.target.value)} />
                <br/>
                <label for="taille_cm">Votre taille :</label>
                <input type="number"  value={taille_cm} id="taille_cm"  onChange={(e) => setTaille(e.target.value)} />cm
                <br/>
                <label for="poids">Votre poids :</label>
                <input type="number"  value={poids} id="poids"  onChange={(e) => setPoid(e.target.value)} />kg
                <br/>
                <label for="age">Votre âge :</label>
                <input type="number" value={age} id="age"  onChange={(e) => setAge(e.target.value)} />age
                <br/>
                <label for="sexe">Votre âge :</label>
                <input type="text" value={sexe} id="sexe"  onChange={(e) => setSexe(e.target.value)} />sexe
                <br/>
                <label for="frequence_sport">Votre frequence de sport par semaine (en jours) :</label>
                <input type="text"  value={frequence_sport} id="frequence_sport"  onChange={(e) => setfrsq(e.target.value)} />
                <br/>
                <label for="password">Votre mot de passe :</label>
                <input type="password"  value={password} id="password"  onChange={(e) => setPass(e.target.value)} />
                <br/>
                <label for="password2">Confirmer votre mot de passe :</label>
                <input type="password"  value={password2} id="password2"  onChange={(e) => setPass2(e.target.value)} />
                <br/>

                <button type="submit">Create</button>

                {/* <NavLink to="/traitement">
                    <p>s'inscrire</p>
                </NavLink> */}
            </form>
        </div>
    );
};

export default Formulaire;