import { useForm } from "react-hook-form";
export const FormulariosPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const enviar = (data) => {
    console.log(data);
  };
  return (
    <main className="h-screen bg-amber-400 text-black flex flex-col">
      <h1>Formularios Page</h1>
      <form onSubmit={handleSubmit(enviar)}>
        <input
          {...register("nombre", {
            required: "El nombre es requerido",
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 10,
              message: "El nombre debe tener menos de 10 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "El nombre debe contener solo letras",
            },
          })}
          type="text"
          className="p-2 border w-full rounded-md mb-4"
          placeholder="Nombre"
        />
        <p>{errors.nombre?.message}</p>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-amber-950 text-white  hover:bg-indigo-700 cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </main>
  );
};
