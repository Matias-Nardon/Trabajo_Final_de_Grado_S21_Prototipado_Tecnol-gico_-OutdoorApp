import { useNavigate } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";
import BackButton from "../../components/BackButton";
import "./Rutas.css";

import champaqui from "../../assets/images/champaqui.jpg";
import gigantes from "../../assets/images/gigantes.jpg";
import condorito from "../../assets/images/condorito.jpg";

export default function Rutas() {

    const navigate = useNavigate();

    const rutas = [

        {
            nombre:"Cerro Champaquí",
            distancia:"24 km",
            dificultad:"Intermedia",
            valoracion:"4.9",
            ubicacion:"Córdoba",
            imagen:champaqui
        },

        {
            nombre:"Los Gigantes",
            distancia:"12 km",
            dificultad:"Alta",
            valoracion:"4.7",
            ubicacion:"Córdoba",
            imagen:gigantes
        },

        {
            nombre:"Quebrada del Condorito",
            distancia:"18 km",
            dificultad:"Baja",
            valoracion:"4.8",
            ubicacion:"Córdoba",
            imagen:condorito
        }

    ];

    return (

        <div className="rutas">

            <BackButton/>

            <h1>Consultar Rutas</h1>

            <p className="subtitulo">
                Descubrí las mejores rutas disponibles.
            </p>

            {

                rutas.map((ruta,index)=>(

                    <div
                        key={index}
                        className="ruta-card"
                    >

                        <img
                            src={ruta.imagen}
                            alt={ruta.nombre}
                        />

                        <div className="ruta-info">

                            <h2>{ruta.nombre}</h2>

                            <div className="chips">

                                <span className="chip verde">
                                    {ruta.dificultad}
                                </span>

                                <span className="chip azul">
                                    {ruta.distancia}
                                </span>

                                <span className="chip amarillo">
                                    ⭐ {ruta.valoracion}
                                </span>

                            </div>

                            <p className="ubicacion">
                                📍 {ruta.ubicacion}
                            </p>

                            <button
                                onClick={()=>navigate("/detalle")}
                            >

                                Ver detalle

                            </button>

                        </div>

                    </div>

                ))

            }

            <BottomMenu/>

        </div>

    );

}