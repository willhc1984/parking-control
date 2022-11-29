import Formulario from "./Formulario";
import "./App.css"
import { useState, useEffect } from "react";
import Tabela from "./Tabela";

function App() {

  const parking = {
    parkingSpotNumber: '',
    licensePlateCar: '',
    brandCar: '',
    modelCar: '',
    colorCar: '',
    responsibleName: '',
    apartment: '',
    block: ''    

  }

  //UseState
  const [objParking, setObjParking] = useState(parking);
  const [parkings, setParkings] = useState([]);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/parking-spot/", {
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
        'Authorization': 'Basic '+btoa('admin:123'), 
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => setParkings(retorno_convertido));
  }, []);

  //Obtendo dados do formulario
  const aoDigitar = (e) => {
    setObjParking({...objParking, [e.target.name]:e.target.value});
  }

  //Cadastrar vaga de estacionamento
  const cadastrar = () => {
    fetch('http://localhost:8080/parking-spot', {
      method: 'post',
      body: JSON.stringify(objParking),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
        'Authorization': 'Basic '+btoa('admin:123'), 
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      console.log(retorno_convertido);
    })
  }

  return (
    <div>
      <p>{JSON.stringify(parkings)}</p>
       <h1>Parking Control - controle de vagas para estacionamento</h1>
    <Formulario eventoTeclado={aoDigitar} cadastrar={cadastrar} />
    <Tabela vetor={parkings} />
    </div>
   
  );
}

export default App;
