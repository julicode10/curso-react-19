import imagenlocal from "../assets/mormonas.jpg";
import { BtnVolver } from "../components/ui/buttons/BtnVolver";
export const ImagenesPage = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10 ">
      <BtnVolver />

      <h1 className="text-3xl font-bold text-center">Imagenes con REACT</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen local importada</h2>
        <img src={imagenlocal} alt="imagen local" />
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen desde url externa</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLONT3RnBtMVFVk0zt9Qb8FU0PmC18Jtngmg&s"
          alt="imagen local"
        />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen como fondo</h2>
        <div
          className="flex h-64 bg-cover bg-center rounded-2xl items-center justify-center"
          style={{
            backgroundImage:
              "url('https://i.blogs.es/c25b4c/hp/1366_2000.jpeg')",
          }}
        >
          <span className="bg-black/60 px-4 py-2 rounded-2xl text-white">
            Fondo con texto encima
          </span>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen Lazy loading</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLONT3RnBtMVFVk0zt9Qb8FU0PmC18Jtngmg&s"
          alt="imagen local"
          loading="lazy"
        />
      </section>
    </main>
  );
};
