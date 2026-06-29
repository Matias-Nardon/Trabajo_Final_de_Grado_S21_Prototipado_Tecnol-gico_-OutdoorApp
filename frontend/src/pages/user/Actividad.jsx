import { useState } from "react";
import BottomMenu from "../../components/BottomMenu";
import BackButton from "../../components/BackButton";
import "./Actividad.css";

import activity from "../../assets/images/activity.jpg";
import champaqui from "../../assets/images/champaqui.jpg";
import gigantes from "../../assets/images/gigantes.jpg";

export default function Actividad() {

    const [inscripto1, setInscripto1] = useState(false);
    const [inscripto2, setInscripto2] = useState(false);
    const [inscripto3, setInscripto3] = useState(false);

    return (

        <div className="actividad">

            <BackButton />

            <h1>Actividades Outdoor</h1>

            {/* ACTIVIDAD 1 */}

            <div className="actividad-card">

                <img
                    src={activity}
                    alt="Salida al Cerro Champaquí"
                />

                <div className="contenido">

                    <h2>Salida al Cerro Champaquí</h2>

                    <p><strong>📅 Fecha:</strong> Domingo 27/07/2026</p>

                    <p><strong>🕗 Horario:</strong> 08:00 hs</p>

                    <p><strong>📍 Lugar de encuentro:</strong> Plaza San Martín, Córdoba Capital</p>

                    <p><strong>🏔 Destino:</strong> Cerro Champaquí</p>

                    <p><strong>👥 Inscriptos:</strong> 15 / 20</p>

                    <p><strong>🎟️ Cupo máximo:</strong> 20 personas</p>

                    <p><strong>🟢 Cupos disponibles:</strong> 5</p>

                    <p><strong>🥾 Nivel requerido:</strong> Intermedio</p>

                    {
                        !inscripto1 ?

                            <button onClick={() => setInscripto1(true)}>
                                Inscribirme
                            </button>

                            :

                            <button className="ok">
                                ✅ Inscripción realizada
                            </button>
                    }

                </div>

            </div>


            {/* ACTIVIDAD 2 */}

            <div className="actividad-card">

                <img
                    src={champaqui}
                    alt="Mountain Bike Altas Cumbres"
                />

                <div className="contenido">

                    <h2>Mountain Bike - Altas Cumbres</h2>

                    <p><strong>📅 Fecha:</strong> Sábado 02/08/2026</p>

                    <p><strong>🕗 Horario:</strong> 07:30 hs</p>

                    <p><strong>📍 Lugar de encuentro:</strong> Mina Clavero</p>

                    <p><strong>🚵 Recorrido:</strong> Camino de las Altas Cumbres</p>

                    <p><strong>👥 Inscriptos:</strong> 12 / 15</p>

                    <p><strong>🎟️ Cupo máximo:</strong> 15 personas</p>

                    <p><strong>🟢 Cupos disponibles:</strong> 3</p>

                    <p><strong>🥾 Nivel requerido:</strong> Avanzado</p>

                    {
                        !inscripto2 ?

                            <button onClick={() => setInscripto2(true)}>
                                Inscribirme
                            </button>

                            :

                            <button className="ok">
                                ✅ Inscripción realizada
                            </button>
                    }

                </div>

            </div>


            {/* ACTIVIDAD 3 */}

            <div className="actividad-card">

                <img
                    src={gigantes}
                    alt="Trekking Los Gigantes"
                />

                <div className="contenido">

                    <h2>Trekking Los Gigantes</h2>

                    <p><strong>📅 Fecha:</strong> Domingo 10/08/2026</p>

                    <p><strong>🕗 Horario:</strong> 09:00 hs</p>

                    <p><strong>📍 Lugar de encuentro:</strong> Villa Carlos Paz</p>

                    <p><strong>🏔 Destino:</strong> Los Gigantes</p>

                    <p><strong>👥 Inscriptos:</strong> 8 / 20</p>

                    <p><strong>🎟️ Cupo máximo:</strong> 20 personas</p>

                    <p><strong>🟢 Cupos disponibles:</strong> 12</p>

                    <p><strong>🥾 Nivel requerido:</strong> Principiante</p>

                    {
                        !inscripto3 ?

                            <button onClick={() => setInscripto3(true)}>
                                Inscribirme
                            </button>

                            :

                            <button className="ok">
                                ✅ Inscripción realizada
                            </button>
                    }

                </div>

            </div>

            <BottomMenu />

        </div>

    );

}