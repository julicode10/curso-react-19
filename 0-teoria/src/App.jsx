import { HolaMundo } from "./components/HolaMundo";
import { Contador } from "./components/Contador";
function App() {
  const frutas = ["manzana", "banana", "cereza", "uva", "naranja"];
  return (
    <div className="bg-black text-white h-screen">
      <HolaMundo />
      <Contador />

      {frutas.map((fruta, index) => (
        <div key={index} className="bg-amber-300">
          <h2 className="text-2xl font-bold">{fruta}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
