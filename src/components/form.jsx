import { useState } from "react"

function Form({ onSubmit = () => {} }){
    const [n, setN] = useState(0)    
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(parseInt(n))
        }}>
            <label>Serie(n) = ( 4*primo(n)-triangular(n-1)) / fibonacci(n+2) </label>
            <br/>
            <input type="number" placeholder="Ingrese un numero" 
                onChange={({ target }) => setN(target.value)}/>
            <br/>
            <input type="submit" value="Calcular"/>
        </form>
    )
}

export default Form