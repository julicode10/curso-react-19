import { BtnVolver } from "../components/ui/buttons/BtnVolver";
import { useParams } from "react-router-dom";
export const PerfilPage = () => {
  const { id } = useParams();
  return (
    <div className="h-screen bg-amber-400 text-black">
      <BtnVolver />
      <h1 className="text-3xl font-bold text-center">
        PerfilPage id usuario: {id}
      </h1>
    </div>
  );
};
