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
  const [btnCadastrar, setBtnCadastrar] = useState(true);

  // UseEffect - buscar dados
  useEffect(() => {
    fetch("http://localhost:8080/parking-spot/", {
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
        'Authorization': 'Basic '+btoa('admin:123'), 
      }
    })
    .then(retorno => retorno.json())
    .then((retorno_convertido) => setParkings(retorno_convertido.content));
  }, []);

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
      if(retorno_convertido.error !== undefined){
        alert("Erro ao cadastrar: " + retorno_convertido.error);
      }else{
        alert("Vaga de estacionamento cadastrada!");
        setParkings([...parkings, retorno_convertido]);
        limparFormulario();
      }
    });
  }

  //Obtendo dados do formulario
  const aoDigitar = (e) => {
    setObjParking({...objParking, [e.target.name]:e.target.value});
  }

  //Selecionar objeto na Table
  const selecionarVaga = (indice) => {
    setObjParking(parkings[indice]);
    setBtnCadastrar(false);
  }

  //Limpar Formulario
  const limparFormulario = () => {
    setObjParking(parking);
    setBtnCadastrar(true);
  }

  return (
    <div>
      <h1>Parking Control - controle de vagas para estacionamento</h1>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objParking}/>
      <Tabela vetor={parkings} selecionar={selecionarVaga} />
    </div>
   
  );
}

export default App;
