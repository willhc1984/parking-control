import Formulario from "./Formulario";
import "./App.css"
import { useState, useEffect } from "react";
import Tabela from "./Tabela";

function App() {

  const parking = {
    id: '',
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
  const [objAuth, setObjAuth] = useState(false);

  //Autenticação
  const auth = () => {
    
  }

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
        alert("Erro ao cadastrar: confira os dados - " + retorno_convertido.error);
      }else{
        alert("Vaga de estacionamento cadastrada!");
        setParkings([...parkings, retorno_convertido]);
        limparFormulario();
      }
    });
  }

  //Editar vaga de estacionamento
  const alterar = () => {
    fetch('http://localhost:8080/parking-spot/' + objParking.id, {
      method: 'put',
      body: JSON.stringify(objParking),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
        'Authorization': 'Basic '+btoa('admin:123')
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.error !== undefined){
        alert("Dados inválidos. Digite corretamente.");
      }else{
        //Mensagem
        alert('Vaga de estacionamento alterada!')
        //Copia do vetor de vagas de estacioanmento
        let vetorTemp = [...parkings]
        //Indice
        let indice = vetorTemp.findIndex((p) => {
          return p.id === objParking.id;
        });
        //Altera produto do vetor
        vetorTemp[indice] = objParking;
        //Atualizar produto
        setParkings(vetorTemp);
        //Limpa formulario
        limparFormulario();
      }
    })
  }

  //Excluir vaga de estacionamento
  const remover = () => {
    fetch('http://localhost:8080/parking-spot/' + objParking.id, {
      method: 'delete',
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
        'Authorization': 'Basic '+btoa('admin:123'), 
      }
    })
    .then(() => {
      alert('Vaga de estacionamento excluida!');
      //Copia vetor de vaagas
      let vetorTemp = [...parkings];
      //Indice
      let indice = vetorTemp.findIndex((p) => {
        return p.id === objParking.id;
      })
      //Remove vaga do vetor temp
      vetorTemp.splice(indice, 1);
      //Atualiza vetor de vagas
      setParkings(vetorTemp);
      //Limpa formulario
      limparFormulario();
    })
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
      {
        objAuth !== false
        ?
          <h1>Acesso não autorizado!</h1>
        :
          <div>
            <h1>Parking Control - controle de vagas para estacionamento</h1>
            <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} 
                              cancelar={limparFormulario} obj={objParking} remover={remover} 
                              alterar={alterar}/>
            <Tabela vetor={parkings} selecionar={selecionarVaga} />
          </div>
      }
   </div>
  );
}

export default App;
