import React from "react";

function App() {
//let credito = 0;
const [ credito, alteraCredito ] = React.useState(0)
function adicionarCrédito(){
alteraCredito( credito + 1000 );
}
function compraPassagem( valor ){
  if (credito < valor){
    alert("você não possui créditos para comprar esta passagem")
    return
  }
alteraCredito(credito - valor)
alert ("Passagem comprada com sucesso")
}
  return (
    <div>
  <h1> Felipe Passagens </h1>
  <p> Conheço os mundos pelo menor preço! </p>
  <button onClick={ ()=>adicionarCrédito() } > Meus Crédito</button>
  <p> Seu Crédito é de <strong> R$ {credito} </strong></p>
  <h2> Viagens </h2>
  <p> Los Angeles - R$ 1200 <button onClick= {()=>compraPassagem(1200)}> Comprar </button></p>
  <p> Londres - R$ 1420 <button onClick= {()=>compraPassagem(1420)}> Comprar </button></p>
    </div>
  );
}

export default App;
