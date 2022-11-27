import React from 'react';
import { NavLink } from 'react-router-dom';


// function FormulaireConnexion() {
//     const [username, setUsername] = useState("");
//     const [password, setPass] = useState("");

//     let handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           let res = await fetch("http://localhost:8000/api/token", {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//               },
//             body: JSON.stringify({
              
//               "username": username,
//               "password" : password,
//             }),
//           });
//           let resJson = await res.json();
//           if (res.status === 200) {

//             setUsername("");
//             setPass("");
            
//           } else {
//             console.log("else")
//           }
//         } catch (err) {
//           console.log(err);
//         }
//       };
      
// }
const FormulaireConnexion = () => {
    const initialFormData = Object.freeze({
        email: '',
        password: '', 
    });
    return (
        <div className='formulaireConnexion'>
            <form method="post" action="Identifiant.js">
                <label for="username"> username :</label>
                <input type="text" name="username" id="username" />
                <br/>
                <label for="pass">Votre mot de passe :</label>
                <input type="password" name="pass" id="pass" />
                <br/>
                <NavLink to="/id">
                    <p>Se connecter</p>
                </NavLink>
            </form>
        </div>
    );
};

export default FormulaireConnexion;