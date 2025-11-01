import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">404</h1>
      <p className="text-white">Pagina no encontrada</p>
      <Link to="/" className="text-blue-500">
        Volver a la pagina principal
      </Link>
    </div>
  );
};
