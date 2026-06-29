import { useNavigate, useLocation } from "react-router-dom";

import {
    FaHome,
    FaMapMarkedAlt,
    FaUsers,
    FaUser
} from "react-icons/fa";

import "./BottomMenu.css";

export default function BottomMenu(){

    const navigate=useNavigate();

    const location=useLocation();

    return(

        <div className="bottom-menu">

            <div
                className={location.pathname==="/home" ? "item active" : "item"}
                onClick={()=>navigate("/home")}
            >

                <FaHome/>

                <span>Inicio</span>

            </div>

            <div
                className={location.pathname==="/rutas" ? "item active" : "item"}
                onClick={()=>navigate("/rutas")}
            >

                <FaMapMarkedAlt/>

                <span>Rutas</span>

            </div>

            <div
                className={location.pathname==="/actividad" ? "item active" : "item"}
                onClick={()=>navigate("/actividad")}
            >

                <FaUsers/>

                <span>Actividades</span>

            </div>

            <div
                className={location.pathname==="/perfil" ? "item active" : "item"}
                onClick={()=>navigate("/perfil")}
            >

                <FaUser/>

                <span>Perfil</span>

            </div>

        </div>

    )

}