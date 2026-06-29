import { useNavigate } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";
import "./Home.css";

import champaqui from "../../assets/images/champaqui.jpg";
import gigantes from "../../assets/images/gigantes.jpg";
import activity from "../../assets/images/activity.jpg";
import avatar from "../../assets/images/avatar.jpg";
import logo from "../../assets/images/logo.jpg";

export default function Home() {

    const navigate = useNavigate();

    return (

        <div className="home">

            <div className="header">

                <img
                    src={logo}
                    className="logo"
                    alt="OutdoorApp"
                />

                <h1>OutdoorApp</h1>

                <p>Explora. Conecta. Aventúrate.</p>

            </div>

            <div className="contenido">

                <h2>¡Bienvenido, Matías! 👋</h2>

                <p className="subtitulo">

                    ¿Qué aventura quieres realizar hoy?

                </p>

                <div className="welcome-card">

                    <div className="welcome-info">

                        <img
                            src={avatar}
                            className="welcome-avatar"
                            alt="Avatar"
                        />

                        <div className="perfil-info">

                            <h3>👤 Perfil del aventurero</h3>

                            <p>🥾 <strong>Nivel:</strong> Intermedio</p>

                            <p>📍 <strong>Ubicación:</strong> Córdoba</p>

                            <p>🏔 <strong>Rutas completadas:</strong> 18</p>

                            <p>🥾 <strong>Actividades realizadas:</strong> 12</p>

                            <p>❤️ <strong>Actividad favorita:</strong> Trekking</p>

                            <p>🎯 <strong>Objetivo:</strong> Recreación</p>

                        </div>

                    </div>

                </div>

                <div className="menu-grid">

                    <div
                        className="menu-card"
                        onClick={() => navigate("/rutas")}
                    >

                        <img src={champaqui} alt="Consultar rutas" />

                        <span>Consultar rutas</span>

                    </div>

                    <div
                        className="menu-card"
                        onClick={() => navigate("/recomendaciones")}
                    >

                        <img src={gigantes} alt="Recomendaciones" />

                        <span>Recomendaciones</span>

                    </div>

                    <div
                        className="menu-card"
                        onClick={() => navigate("/actividad")}
                    >

                        <img src={activity} alt="Actividades" />

                        <span>Actividades</span>

                    </div>

                    <div
                        className="menu-card"
                        onClick={() => navigate("/perfil")}
                    >

                        <img src={avatar} alt="Mi Perfil" />

                        <span>Mi Perfil</span>

                    </div>

                </div>

            </div>

            <BottomMenu/>

        </div>

    );

}