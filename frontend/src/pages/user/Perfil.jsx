import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import BottomMenu from "../../components/BottomMenu";
import BackButton from "../../components/BackButton";

import "./Perfil.css";

import avatar from "../../assets/images/avatar.jpg";

export default function Perfil() {

    const navigate = useNavigate();

    const { usuario } = useContext(UserContext);

    function cerrarSesion(){

        const confirmar = window.confirm("¿Desea cerrar sesión?");

        if(confirmar){

            navigate("/");

        }

    }

    return (

        <div className="perfil">

            <BackButton/>

            <div className="perfil-card">

                <img
                    src={avatar}
                    className="avatar"
                    alt="Avatar"
                />

                <h1>{usuario.nombre}</h1>

                <p className="nivel">

                    Nivel {usuario.nivel}

                </p>

                <p className="descripcion">

                    Amante de las actividades outdoor y la naturaleza.

                </p>

            </div>

            <div className="estadisticas">

                <div className="stat">

                    <h2>18</h2>

                    <span>Rutas</span>

                </div>

                <div className="stat">

                    <h2>12</h2>

                    <span>Actividades</span>

                </div>

                <div className="stat">

                    <h2>4.8 ★</h2>

                    <span>Valoración</span>

                </div>

            </div>

            <div className="preferencias">

                <h2>Información personal</h2>

                <p><strong>📧 Correo:</strong> {usuario.correo}</p>

                <p><strong>🎂 Edad:</strong> {usuario.edad} años</p>

                <p><strong>📍 Provincia:</strong> {usuario.provincia}</p>

                <p><strong>🥾 Nivel:</strong> {usuario.nivel}</p>

                <p><strong>❤️ Actividad favorita:</strong> {usuario.actividad}</p>

                <p><strong>🎯 Objetivo:</strong> {usuario.objetivo}</p>

            </div>

            <button
                className="editar"
                onClick={() => navigate("/editar-perfil")}
            >

                Editar perfil

            </button>

            <button
                className="cerrar"
                onClick={cerrarSesion}
            >

                Cerrar sesión

            </button>

            <BottomMenu/>

        </div>

    );

}