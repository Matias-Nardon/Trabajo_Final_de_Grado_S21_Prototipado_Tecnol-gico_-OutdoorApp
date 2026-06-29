import { useNavigate } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";
import BackButton from "../../components/BackButton";
import "./DetalleRuta.css";

import champaqui from "../../assets/images/champaqui.jpg";

export default function DetalleRuta() {

    const navigate = useNavigate();

    return (

        <div className="detalle">

            <img
                src={champaqui}
                className="detalle-imagen"
                alt="Cerro Champaquí"
            />

            <div className="detalle-contenido">

                <BackButton />

                <h1>Cerro Champaquí</h1>

                <p className="descripcion">
                    La ruta más emblemática de la provincia de Córdoba. Ideal para quienes buscan una experiencia de trekking con paisajes únicos y vistas panorámicas.
                </p>

                <div className="info">

                    <div className="dato">
                        <h3>📏 Distancia</h3>
                        <p>24 km</p>
                    </div>

                    <div className="dato">
                        <h3>⛰ Dificultad</h3>
                        <p>Intermedia</p>
                    </div>

                    <div className="dato">
                        <h3>⏱ Duración</h3>
                        <p>8 horas</p>
                    </div>

                    <div className="dato">
                        <h3>⭐ Valoración</h3>
                        <p>4.8 / 5</p>
                    </div>

                </div>

                <button
                    className="btn-verde"
                    onClick={() => navigate("/mapa")}
                >
                    Ver mapa
                </button>

                <button
                    className="btn-secundario"
                    onClick={() => navigate("/actividad")}
                >
                    Inscribirme a la actividad
                </button>

            </div>

            <BottomMenu />

        </div>

    );

}