import { useNavigate } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";
import BackButton from "../../components/BackButton";
import "./Recomendaciones.css";

import champaqui from "../../assets/images/champaqui.jpg";
import gigantes from "../../assets/images/gigantes.jpg";

export default function Recomendaciones() {

    const navigate = useNavigate();

    return (

        <div className="reco">

            <BackButton />

            <h1>Recomendaciones Personalizadas</h1>

            <p className="subtitulo">
                Basadas en tu perfil y preferencias.
            </p>

            <div className="reco-card">

                <img
                    src={champaqui}
                    alt="Champaquí"
                />

                <div className="contenido">

                    <h2>Cerro Champaquí</h2>

                    <p className="motivo">

                        ⭐ Recomendado porque tu nivel es <strong>Intermedio</strong>
                        y realizás actividades de trekking.

                    </p>

                    <ul>

                        <li>📏 Distancia: 24 km</li>

                        <li>🥾 Dificultad: Intermedia</li>

                        <li>⛰ Excelente para senderismo</li>

                    </ul>

                    <button
                        onClick={() => navigate("/detalle")}
                    >

                        Ver detalle

                    </button>

                </div>

            </div>

            <div className="reco-card">

                <img
                    src={gigantes}
                    alt="Gigantes"
                />

                <div className="contenido">

                    <h2>Los Gigantes</h2>

                    <p className="motivo">

                        ⭐ Ideal para ampliar tu experiencia
                        en rutas de montaña.

                    </p>

                    <ul>

                        <li>📏 Distancia: 12 km</li>

                        <li>🥾 Dificultad: Alta</li>

                        <li>🌄 Paisajes panorámicos</li>

                    </ul>

                    <button
                        onClick={() => navigate("/detalle")}
                    >

                        Ver detalle

                    </button>

                </div>

            </div>

            <BottomMenu/>

        </div>

    );

}