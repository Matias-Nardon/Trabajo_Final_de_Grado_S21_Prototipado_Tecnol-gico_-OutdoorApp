import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Home from "./pages/user/Home";
import Rutas from "./pages/user/Rutas";
import DetalleRuta from "./pages/user/DetalleRuta";
import Mapa from "./pages/user/Mapa";
import Recomendaciones from "./pages/user/Recomendaciones";
import Actividad from "./pages/user/Actividad";
import Perfil from "./pages/user/Perfil";
import EditarPerfil from "./pages/user/EditarPerfil";
import Register from "./pages/auth/Register";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/rutas"
                    element={<Rutas />}
                />

                <Route
                    path="/detalle"
                    element={<DetalleRuta />}
                />

                <Route
                    path="/mapa"
                    element={<Mapa />}
                />

                <Route
                    path="/recomendaciones"
                    element={<Recomendaciones />}
                />

                <Route
                    path="/actividad"
                    element={<Actividad />}
                />

                <Route
                    path="/perfil"
                    element={<Perfil />}
                />

                <Route
                    path="/editar-perfil"
                    element={<EditarPerfil />}
                />

                <Route
                    path="/registro"
                    element={<Register/>}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;