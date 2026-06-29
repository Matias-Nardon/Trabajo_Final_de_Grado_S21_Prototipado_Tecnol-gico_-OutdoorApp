import BottomMenu from "../../components/BottomMenu";
import BackButton from "../../components/BackButton";
import "./Mapa.css";

export default function Mapa() {

    return (

        <div className="mapa">

            <BackButton />

            <h1>Cerro Champaquí</h1>

            <p className="descripcion">
                Visualiza el recorrido completo de la ruta seleccionada.
            </p>

            <div className="datos">

                <div>
                    <strong>24 km</strong>
                    <span>Distancia</span>
                </div>

                <div>
                    <strong>Intermedia</strong>
                    <span>Dificultad</span>
                </div>

                <div>
                    <strong>8 hs</strong>
                    <span>Duración</span>
                </div>

            </div>

            <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Cerro+Champaqui+Cordoba&output=embed"
            ></iframe>

            <BottomMenu/>

        </div>

    );

}