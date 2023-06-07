import './App.css'
import ComponentNew from './newComponent'
import Boton from './boton'

function App() {

  return (

    <div>
      <ComponentNew parrafo="El lenguaje denotativo es aquel que se usa para expresar datos e informaciones de forma clara y objetiva."/>
      <ComponentNew parrafo="El lenguaje connotativo, por otro lado, transmite ideas en sentido simbólico o figurado como, por ejemplo, “El frío era tanto que hiela hasta los huesos”."/>
      <ComponentNew parrafo="Es abundante la presencia de sustantivos y adjetivos que expresen sus cualidades."/>
      <Boton Nboton="HOLA" />

    </div>
  )
}

export default App
