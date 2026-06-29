import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import BottomMenu from "../../components/BottomMenu";
import BackButton from "../../components/BackButton";

import "./EditarPerfil.css";

export default function EditarPerfil() {

    const navigate = useNavigate();

    const { usuario, setUsuario } = useContext(UserContext);

    function actualizar(e){

        setUsuario({

            ...usuario,

            [e.target.name]: e.target.value

        });

    }

    function guardar(){

        alert("✅ Perfil actualizado correctamente");

        navigate("/perfil");

    }

    return(

        <div className="editar-perfil">

            <BackButton/>

            <h1>Editar Perfil</h1>

            <div className="formulario">

                <label>Nombre</label>

                <input
                    name="nombre"
                    value={usuario.nombre}
                    onChange={actualizar}
                />

                <label>Correo electrónico</label>

                <input
                    name="correo"
                    value={usuario.correo}
                    onChange={actualizar}
                />

                <label>Edad</label>

                <input
                    name="edad"
                    value={usuario.edad}
                    onChange={actualizar}
                />

                <label>Provincia</label>

                <input
                    name="provincia"
                    value={usuario.provincia}
                    onChange={actualizar}
                />

                <label>Nivel</label>

                <select
                    name="nivel"
                    value={usuario.nivel}
                    onChange={actualizar}
                >

                    <option>Principiante</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>

                </select>

                <label>Actividad favorita</label>

                <select
                    name="actividad"
                    value={usuario.actividad}
                    onChange={actualizar}
                >

                    <option>Trekking</option>
                    <option>Senderismo</option>
                    <option>Camping</option>
                    <option>Mountain Bike</option>

                </select>

                <label>Objetivo</label>

                <select
                    name="objetivo"
                    value={usuario.objetivo}
                    onChange={actualizar}
                >

                    <option>Recreación</option>
                    <option>Entrenamiento</option>
                    <option>Turismo</option>

                </select>

                <button
                    onClick={guardar}
                >

                    Guardar cambios

                </button>

            </div>

            <BottomMenu/>

        </div>

    );

}