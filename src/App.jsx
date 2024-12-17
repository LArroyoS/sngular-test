import { useState } from 'react'

import Series from './utils/serie'
import Form from './components/form'
import Result from './components/result'

function App() {
  const [result, setResult] = useState("")
  const series = new Series();
  
  const calcule = (n) => {
    try{
      const primo = series.primo(n)
      const triangular = series.triangular(n-1)
      const fibonacci = series.fibonacci(n+2) 

      setResult((4*primo-triangular)/fibonacci)
    }
    catch(error){
      setResult("El valor N no es valido, asegúrese que sea un numero natural positivo");
    }
  }

  return (
    <div>
      <Form onSubmit={calcule} />
      <Result result={result} />
    </div>
  )
}

export default App
