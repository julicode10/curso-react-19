import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export const CardList = () => {
  const urlImage =
    "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg";
  const temasTeoria = [
    {
      title: "hook useEffect",
      to: "/useffect",
    },
    {
      title: "imagenes",
      to: `/imagenes?src=${urlImage}`,
    },
    {
      title: "rutas anidadas",
      to: "/rutas-anidadas",
    },
    {
      title: "apis",
      to: "/apis",
    },
    {
      title: "formularios",
      to: "/formularios",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {temasTeoria.map((item, index) => (
        <Link
          to={item.to}
          key={index}
          className="group w-full bg-[#151515] p-5 rounded-xl border-3 border-[#333] flex justify-between hover:border-[#e776f3] cursor-pointer"
        >
          <h3 className="font-medium text-lg">{item.title} </h3>
          <Icon
            className="group-hover:text-[#e776f3]"
            icon="weui:arrow-filled"
            width="12"
            height="24"
          />
        </Link>
      ))}
    </div>
  );
};
