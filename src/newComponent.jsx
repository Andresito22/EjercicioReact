import Boton from "./boton"

export default function ComponentNew(props){
    return (
    <div className="ejercicio">
        <div className="componente">
            <p>{props.parrafo}</p>
            <Boton />
        </div>
    </div>
    )
    }

