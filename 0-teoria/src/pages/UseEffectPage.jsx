import { useState, useEffect } from "react";
import { BtnVolver } from "../components/ui/buttons/BtnVolver";
export const UseEffectPage = () => {
  const [segundos, setSegundos] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-screen bg-amber-400 text-black flex flex-col justify-center items-center">
      <BtnVolver />
      <h2 className="text-3xl font-bold mb-6">UseEffectPage</h2>
      <div className="w-48 h-48 rounded-full bg-white border-8 border-black flex justify-center items-center shadow-lg">
        <span className="text-4xl font-semibold">{segundos}</span>
      </div>
    </div>
  );
};
