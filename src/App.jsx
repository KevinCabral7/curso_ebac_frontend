import { useState } from 'react'


function App() {

  let [peso, setPeso] = useState('')
  let [altura, setAltura] = useState('')
  let [imc, setImc] = useState('')
  
  function handleHeightChange(e){
    setAltura(e.target.value)
  }
  function handleWeightChange(e){
    setPeso(e.target.value)
  }

    imc = peso / altura
    let posicao
    if (imc < 18.5) {
      posicao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      posicao = 'Peso normal';
    } else if (imc < 29.9) {
      posicao = 'Sobrepeso';
    } else {
      posicao = 'Obesidade';
    }
  return (
    <>
    <form>
      <input type="number" onChange={handleHeightChange} placeholder='altura' value={altura} />
      <input type="number" onChange={handleWeightChange} placeholder='peso' value={peso} />
    </form>
    <p>
      Seu IMC é: {Math.round(imc)}
    </p>
    <p>e sua posição na tabela é: {posicao}</p>
    </>
  )
}

export default App
