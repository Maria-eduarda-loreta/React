import { Link } from "react-router-dom"

function Pag1() {
    return (
      <div>
         <h1>pag1</h1>
         <Link to={"/Pag2"}>Ver Pag2</Link>
      </div>
     
    )
  }
  
  export default Pag1