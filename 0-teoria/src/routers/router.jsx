import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { UseEffectPage } from "../pages/UseEffectPage";
import { ImagenesPage } from "../pages/ImagenesPage";
import { RutasAnidadasPage } from "../pages/RutasAnidadasPage";
import { PerfilPage } from "../pages/PerfilPage";
import { ConfiguracionPage } from "../pages/ConfiguracionPage";

export const MyRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/useffect" element={<UseEffectPage />} />
      <Route path="/imagenes" element={<ImagenesPage />} />
      <Route path="/rutas-anidadas" element={<RutasAnidadasPage />}>
        {/* el index es el componente que se muestra cuando la ruta es /rutas-anidadas */}
        <Route index element={<Navigate to="perfil/10" replace />} />
        <Route path="perfil/:id" element={<PerfilPage />} />
        <Route path="configuracion" element={<ConfiguracionPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
