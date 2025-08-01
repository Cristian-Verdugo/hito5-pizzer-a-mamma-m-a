
# Pizzería Mamma Mía - Hito 5

Este proyecto es una aplicación de React creada con Vite.js para la gestión de una pizzería, implementando enrutamiento con React Router y consumo de APIs externas.

## Hito 5 - React Router I

### 🚀 Funcionalidades implementadas:

#### Enrutamiento y estructura
- ✅ **React Router** instalado y configurado.
- ✅ Componentes principales (Home, Register, Login, Cart, Pizza) movidos a la carpeta `src/pages`.
- ✅ Rutas configuradas para cada vista:
  - `/` → Home
  - `/register` → Register
  - `/login` → Login
  - `/cart` → Cart
  - `/pizza/p001` → Pizza
  - `/profile` → Profile
  - `/404` y rutas no existentes → NotFound
- ✅ Navbar con enlaces a todas las rutas principales (usando `Link`). El botón "🛒 Total: $xxx" redirige a `/cart`.
- ✅ Componente NotFound creativo con enlace para volver al inicio.
- ✅ Componente Profile con email y botón de cerrar sesión (estáticos).

### 🛠️ Tecnologías utilizadas:
- **React 19** con hooks (useState, useEffect)
- **React Router DOM** para enrutamiento
- **Vite** como bundler y servidor de desarrollo
- **Bootstrap 5** para estilos y responsividad
- **Fetch API** para consumo de APIs REST
- **Async/Await** para manejo de peticiones asíncronas

### 📋 Pasos para ejecutar el proyecto:
1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
3. Abre tu navegador en [http://localhost:5173/](http://localhost:5173/) y navega por las distintas rutas usando el menú.

### 📦 Estructura principal:

```
src/
  pages/
    Home.jsx
    Register.jsx
    Login.jsx
    Cart.jsx
    Pizza.jsx
    Profile.jsx
    NotFound.jsx
  components/
    Navbar.jsx
    Footer.jsx
    Header.jsx
    CardPizza.jsx
  utils/
    format.js
    pizzas.js
```

### ✅ Requerimientos del Hito 5:
1. Instalación y configuración de React Router.
2. Componentes principales en carpeta `pages`.
3. Rutas configuradas y funcionando.
4. Componente NotFound creativo.
5. Componente Profile con email y botón de cerrar sesión.
6. Navbar con enlaces y botón de carrito funcional.

---
Desarrollado por Cristian Verdugo para Desafío Latam.
