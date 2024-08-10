import { Link } from "react-router-dom"

const nav = (props) => {


    return (
<nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Pagina1">Pagina1</Link></li>
        <li><Link to="/Pagina2">Pagina2</Link></li>

      </ul>
    </nav>
    )
}

export default nav