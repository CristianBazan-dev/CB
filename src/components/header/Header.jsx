import React from "react";
import "./header.css";

function Header(props) {
  return (
    <header>

      
      <nav>

        <a href="">
          <h1>CB</h1>
        </a>

        <ul>
          <a href="/#services"></a>
          <li>Servicios</li>
          <li>Acerca de</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
