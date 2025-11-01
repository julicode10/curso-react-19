import { HolaMundo } from "./components/HolaMundo";
import { Contador } from "./components/Contador";
import { CardProducto } from "./components/CardProducto";
import { CardFruta } from "./components/CardFruta";
function App() {
  const frutas = ["manzana", "banana", "cereza", "uva", "naranja"];
  const productos = [
    {
      id: 1,
      nombre: "laptop",
      precio: 1000,
      destacado: true,
    },
    {
      id: 2,
      nombre: "tablet",
      precio: 800,
      destacado: false,
    },
    {
      id: 3,
      nombre: "mouse",
      precio: 100,
      destacado: true,
    },
    {
      id: 4,
      nombre: "teclado",
      precio: 150,
      destacado: false,
    },
  ];
  return (
    <div className="bg-black text-white h-screen">
      <HolaMundo />
      <Contador />
      <h2 className="text-2xl font-bold">Frutas</h2>
      {frutas.map((fruta, index) => (
        <CardFruta key={index} fruta={fruta} />
      ))}

      <h2 className="text-2xl font-bold">Productos</h2>
      {productos.map((producto) => (
        <CardProducto key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default App;
