import { useState } from "react";
import './Contador.css';



function Contador(){
    const [contar,setcontar]= useState(0);

    return(
        <div className="contador-container">
            <h2>contador: {contar}</h2>
            <button className="contador-button" onClick={()=> setcontar(contar + 1)}>Incrementar</button>
            <button className="contador-button" onClick={()=> setcontar(contar - 1)}>Decrementar</button>

        </div>
    );
}
export default Contador;

