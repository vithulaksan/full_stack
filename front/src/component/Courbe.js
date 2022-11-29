import React from 'react';

function getValues() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input1 = document.getElementById("food-item").value;
    // Afficher la valeur
    //console.log(input1);
    var input2 = document.getElementById("quantity").value;

    let url = `http://localhost:8000/aliment/${input1}` ;
    fetch(url).then((response) => 
    response.json().then((data) => {
        //console.log(data.status);
        let affichage = '<ul>';
        for (let fooditem of data.status){
            let cal = fooditem.calorie_en_cal_per_ml_or_g*input2/100
            affichage += `<li><strong>Catégorie : </strong>${fooditem.Category} - <strong>Calories pour ${input2}g </strong> = ${cal} Cal.</li>`; 
        }
        affichage += '</ul>';
        document.querySelector("#response").innerHTML = affichage;
    })).catch((err) => console.log('Erreur : ' + err)); 
};



/*
document.querySelector("#food-item").addEventListener('input',function () {
    if (this.value.length == 6 ){  //provisoire
        let url2 = `http://localhost:8000/todo/${this.value}` ; //the thing to add 

        fetch(url2).then((response) => 
        response.json().then((data) => {
            console.log(data);
            let affichage = '<ul>';
            for (let item of data) {
                affichage += `<li>${item.item} test</li>`;
            }  
            affichage += '</ul>';
            document.querySelector("#response").innerHTML = affichage;
        })).catch((err) => console.log('Erreur : ' + err));      
    }
});
*/


const Courbe = () => {
    return (
        <div className='courbe'>
            <div className="page">
            <div className="first-container">
            <div className="search-container">
                <form className='form-row'>
                    <label htmlFor='food-item'>FoodItem</label>
                    <input id='food-item' name='food-item' type='text'/>
                </form>
                <form className='form-row'>
                    <label htmlFor='quantity'>Quantité</label>
                    <input id='quantity' name='quantity' type='number'/>
                </form>
                <div className="search-btn" onClick={getValues}>
                    <p className="search-txt">Search</p>
                </div>
            </div>
            <div className="response-container">
                <div className="response" id="response"></div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Courbe;