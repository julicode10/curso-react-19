export const CardProducto = ({ producto }) => {
  return (
    <div className="bg-amber-300">
      <h2 className="text-2xl font-bold">{producto.nombre}</h2>
      <p className="text-sm text-gray-500">Precio: {producto.precio}</p>
      {producto.destacado && <span className="text-green-500"> destacado</span>}
    </div>
  );
};
