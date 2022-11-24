import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const PlaqueDisplay = ( url ) => {
    const [stationnements, setStationnement] = useState([]); // liste de stationnement nul au début
    console.log("Depuis le components ",url.url);
    var parking_id = useParams();
    console.log(parking_id.parking_id === undefined);
    if (parking_id.parking_id !== undefined) {
        var url = url.url + "/parking/" + parking_id.parking_id.toString();
        console.log("url ",url );
    }
    else {
        var url = url.url + "/stationnement/";
        console.log("url ",url );
    }
    
    useEffect(() => {
        // http://localhost:8080/stationnement
        axios.get(url).then((data) => {
            setStationnement(data.data);

        });
    },[parking_id.parking_id])

    var content = [];
    stationnements.map((station) => {
        console.log(station.valide);
        var temp = true;
        content.push(
        <tr key={station.id} style={{
            backgroundColor: station.valide === true ? 'lightgreen' : 'red',
          }}>
            <td>{station.plaque}</td>
            <td>{station.date_arrivee}</td>
            <td>{station.date_fin}</td>
            <td>{station.valide === true ? "Valide" : "Invalide"}</td>
        </tr>);
    });

    return(
        <table className="table-stationnement">
            <thead>
                <tr>
                <td>Plaque</td>
                <td>Date d'arrivée</td>
                <td>Date de fin</td>
                <td>Validité</td>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table> 
    );
};

export default PlaqueDisplay;