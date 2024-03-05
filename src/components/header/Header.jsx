import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/droyfngct/image/upload/v1696991998/Brand/Web/Logo_-_Light_ow2ugs.png"
            alt=""
          />
        </Link>
      </div>

      <nav id="nav">
        <ul>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/services">
            <li>Servicios</li>
          </Link>
          <Link to="/about">
            <li>Acerca de</li>
          </Link>
          <Link to="/contact">
            <li>Contacto</li>
          </Link>
        </ul>
      </nav>

      
    </header>
  );
}

export default Header;
