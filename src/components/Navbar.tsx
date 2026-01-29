import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ background: "#1976d2", padding: "20px" }}>
      <Link to="/" style={{ color: "white", marginRight: 50 }}>
        Simpsons - Personajess
      </Link>
      <Link to="/home" style={{ color: "white", marginRight: 10 }}>
        Home
      </Link>

      <Link to="/listado" style={{ color: "white", marginRight: 10 }}>
        Listado
      </Link>

      <Link to="/estadisticas" style={{ color: "white", marginRight: 10 }}>
        Estadísticas
      </Link>

      <Link to="/info" style={{ color: "white", marginRight: 10 }}>
        Informacion
      </Link>
    </nav>
  );
};
