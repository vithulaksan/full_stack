import React from 'react';
import { NavLink } from 'react-router-dom';

const Formulaire = (props) => {
    return (
        <div className='formulaire'>
            <form method="post" action="traitement.php">
                <label for="nom">Votre nom :</label>
                <input type="text" name="nom" id="nom" />
                <br/>
                <label for="prenom">Votre prénom :</label>
                <input type="text" name="prenom" id="prenom" />
                <br/>
                <label for="email">Votre e-mail :</label>
                <input type="email" name="email" id="email" />
                <br/>
                <label for="email2">Confirmer votre e-mail :</label>
                <input type="email" name="email2" id="email2" />
                <br/>
                <label for="taille">Votre taille :</label>
                <input type="number" name="taille" id="taille" />cm
                <br/>
                <label for="poid">Votre poids :</label>
                <input type="number" name="poid" id="poid" />kg
                <br/>
                <label for="age">Votre âge :</label>
                <input type="number" name="age" id="age" />age
                <br/>
                <label>Votre sexe:</label>
                <input type="radio" name="sexe" value="homme" id="homme" /> <label for="homme">Homme</label>
                <input type="radio" name="sexe" value="femme" id="femme" /> <label for="femme">Femme</label>
                <input type="radio" name="sexe" value="autres" id="autres" /> <label for="autres">Autres</label>
                <br/>
                <label for="frsq">Votre frequence de sport par semaine (en jours) :</label>
                <input type="text" name="frsq" id="frsq" />
                <br/>
                <label for="pass">Votre mot de passe :</label>
                <input type="password" name="pass" id="pass" />
                <br/>
                <label for="pass2">Confirmer votre mot de passe :</label>
                <input type="password" name="pass2" id="pass2" />
                <br/>
                <NavLink to="/traitement">
                    <p>s'inscrire</p>
                </NavLink>
            </form>
        </div>
    );
};

export default Formulaire;