# React 19 - Teoría

Proyecto educativo desarrollado con **React 19** y **Vite** para aprender los conceptos fundamentales de React. Este proyecto incluye ejemplos prácticos de hooks, routing, componentes y manejo de imágenes.

## 🚀 Tecnologías Utilizadas

- **React 19.1.1** - Framework de JavaScript para construir interfaces de usuario
- **Vite** (rolldown-vite) - Build tool y dev server de alto rendimiento
- **React Router DOM 7.9.5** - Biblioteca para enrutamiento en React
- **Tailwind CSS 4.1.16** - Framework de CSS utility-first
- **Iconify** - Biblioteca de iconos
- **ESLint** - Linter para JavaScript/React

## 📁 Estructura del Proyecto

```
src/
├── assets/              # Recursos estáticos (imágenes)
│   ├── mormonas.jpg
│   └── react.svg
├── components/          # Componentes reutilizables
│   ├── ui/
│   │   └── buttons/
│   │       └── BtnVolver.jsx
│   ├── CardFruta.jsx
│   ├── CardList.jsx
│   ├── CardProducto.jsx
│   ├── Contador.jsx
│   ├── HolaMundo.jsx
│   └── Modal.jsx
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página principal con lista de temas
│   ├── Login.jsx       # Página de login
│   ├── NotFound.jsx    # Página 404
│   ├── UseEffectPage.jsx # Ejemplo del hook useEffect
│   └── ImagenesPage.jsx  # Ejemplo de manejo de imágenes
├── routers/            # Configuración de rutas
│   └── router.jsx
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada de la aplicación
└── index.css           # Estilos globales
```

## 🛣️ Rutas Disponibles

- `/` - Página principal (Home)
- `/login` - Página de login
- `/useffect` - Ejemplo del hook `useEffect`
- `/imagenes` - Ejemplos de manejo de imágenes en React
- `/*` - Página 404 (cualquier ruta no encontrada)

## 🎯 Características Principales

### 1. **Hook useEffect**

- Ejemplo práctico del hook `useEffect` con un contador que se actualiza cada segundo
- Demuestra la limpieza de intervalos para evitar memory leaks

### 2. **Manejo de Imágenes**

- Importación de imágenes locales
- Uso de imágenes desde URLs externas
- Imágenes como fondo de elementos
- Implementación de lazy loading

### 3. **Navegación**

- Sistema de routing con React Router DOM
- Componente `CardList` que muestra un menú de navegación
- Botón de volver reutilizable (`BtnVolver`)

### 4. **Estilos**

- Diseño moderno con Tailwind CSS
- Temas oscuros y claros
- Diseño responsive

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos para ejecutar el proyecto

1. **Clonar o descargar el repositorio**

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

   La aplicación se abrirá en `http://localhost:5173`

4. **Construir para producción**

   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**

   ```bash
   npm run preview
   ```

6. **Ejecutar linter**
   ```bash
   npm run lint
   ```

## 📝 Componentes Principales

### `CardList`

Componente que renderiza una lista de tarjetas navegables con los temas disponibles del proyecto.

### `BtnVolver`

Botón reutilizable para navegar de vuelta a la página anterior o a la home.

### `UseEffectPage`

Página de ejemplo que demuestra el uso del hook `useEffect` con un contador en tiempo real.

### `ImagenesPage`

Página educativa que muestra diferentes formas de trabajar con imágenes en React.

## 🎨 Personalización

El proyecto utiliza Tailwind CSS para los estilos. Puedes modificar los estilos en:

- Archivos de componentes (clases de Tailwind)
- `src/index.css` para estilos globales

## 📚 Recursos de Aprendizaje

Este proyecto es ideal para aprender:

- Conceptos básicos de React 19
- Hooks de React (`useState`, `useEffect`)
- React Router DOM
- Tailwind CSS
- Estructura de proyectos React modernos

## 🤝 Contribuciones

Este es un proyecto educativo personal. Si encuentras errores o tienes sugerencias, ¡las contribuciones son bienvenidas!

## 📄 Licencia

Este proyecto es de uso educativo y personal.

---

**Desarrollado con ❤️ usando React 19 y Vite**
