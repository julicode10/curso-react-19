import { CardList } from "../components/CardList";
export const Home = () => {
  //esto es un comentario de una sola linea
  /*
  esto es un comentario de varias lineas
  */
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4  bg-black text-white">
      {/* este es el contenido principal de la pagina */}
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8">React 19 teoria</h1>
        <CardList />
      </div>
    </main>
  );
};
