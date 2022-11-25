import Formulario from "./Formulario";
import { styles } from "./App.css"
import { useState } from "react";

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

  //Obtendo dados do formulario
  const aoDigitar = (e) => {
    setObjParking({...objParking, [e.target.name]:e.target.value});
  }

  //Cadastrar vaga de estacionamento
  

  return (
    <div>
       <h1>Parking Control - controle de vagas para estacionamento</h1>
    <Formulario eventoTeclado={aoDigitar} />
    </div>
   
  );
}

export default App;
