import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';

function calcul_calorie(taille,poids,age,sexe,frequence) {
    let calorie;
    if (sexe == 'Homme' || sexe == 'homme' || sexe =='H' || sexe =='h'){
        if (frequence == 0 ){
            calorie = ((13.707 * poids) + (492.3 * taille/100) - (6.673 * age) + 77.607 )*1.2}
        if (frequence >= 1 && frequence <= 3) {
            calorie = ((13.707 * poids) + (492.3 * taille/100) - (6.673 * age) + 77.607 )*1.375}
        if (frequence >= 4 && frequence <= 6) {
            calorie = ((13.707 * poids) + (492.3 * taille/100) - (6.673 * age) + 77.607 )*1.55}
        if (frequence >= 7) {
            calorie = ((13.707 * poids) + (492.3 * taille/100) - (6.673 * age) + 77.607 )*1.725} }
    else{
        if( frequence == 0 ){
            calorie = ((9.740* poids) + (172.9 * taille/100) - (4.737 * age) + 667.051 )*1.2}
        if( frequence >= 1 && frequence <= 3 ){
            calorie = ((9.740* poids) + (172.9 * taille/100) - (4.737 * age) + 667.051 )*1.375}
        if (frequence >= 4 && frequence <= 6) {
            calorie = ((9.740* poids) + (172.9 * taille/100) - (4.737 * age) + 667.051 )*1.55}
        if (frequence >= 7){
            calorie = ((9.740* poids) + (172.9 * taille/100) - (4.737 * age) + 667.051 )*1.725}}

    return (calorie)
}


const IdClient = () => {

    let [items,setItems] = useState([])
    let { username } = useParams();
    useEffect(()=> {
        getData()
    }, [])

    let getData = async() =>{
        let response = await fetch('http://localhost:8000/api/'+username, {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })

        let data = await response.json()

        setItems(data)
        console.log(data)
        console.log("version2")
    }
    let calorie_user = calcul_calorie(`${items.Taille_cm}`,`${items.poids}`,`${items.age}`,`${items.sexe}`,`${items.frequence_sport}`);
    let content = [`${items.nom}`,`${items.prenom}`,`${items.Taille_cm}`,`${items.poids}`,`${items.age}`,`${items.sexe}`,calorie_user]
    return (
        <div className='client'>
          <div className="label-container">
            <label id='Nom'>Nom : {content[0]}</label>
            <label id='Prenom'>Prenom : {content[1]}</label>
            <label id='Taille'>Taille : {content[2]}</label>
          </div>
          <div className="label-container">
            <label id='Poids'>Poids : {content[3]}</label>
            <label id='Âge'>Age : {content[4]}</label>
            <label id='sexe'>Sexe : {content[5]}</label>
          </div>
          <h2>Ma Consommation</h2>
          <div className="label-container">
            <p className='conso'>Vous devez consomez <strong>{Math.round(calorie_user)}</strong> kcal par jours</p>
          </div>
        </div>
    );
};

export default IdClient;