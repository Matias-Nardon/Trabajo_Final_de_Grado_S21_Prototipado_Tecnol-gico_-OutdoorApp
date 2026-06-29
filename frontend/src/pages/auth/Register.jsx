import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

import logo from "../../assets/images/logo.jpg";

export default function Register() {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmar, setConfirmar] = useState("");

    function registrar() {

        const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

        if (nombre === "" || correo === "" || password === "" || confirmar === "") {

            alert("Complete todos los campos.");
            return;

        }

        if (!regex.test(password)) {

            alert(
                "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
            );

            return;

        }

        if (password !== confirmar) {

            alert("Las contraseñas no coinciden.");
            return;

        }

        alert("✅ Usuario registrado correctamente.");

        navigate("/");

    }

    return (

        <div className="login">

            <div className="overlay">

                <div className="login-card">

                    <img
                        src={logo}
                        className="logo"
                        alt="OutdoorApp"
                    />

                    <h1>Crear cuenta</h1>

                    <p>

                        Registrate para comenzar a explorar nuevas aventuras.

                    </p>

                    <input
                        placeholder="Nombre completo"
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                    />

                    <input
                        placeholder="Correo electrónico"
                        value={correo}
                        onChange={(e)=>setCorreo(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <div className="password-rules">

                        <p className={password.length >= 8 ? "ok" : "error"}>
                            {password.length >= 8 ? "✅" : "❌"} Mínimo 8 caracteres
                        </p>

                        <p className={/[A-Z]/.test(password) ? "ok" : "error"}>
                            {/[A-Z]/.test(password) ? "✅" : "❌"} Una letra mayúscula
                        </p>

                        <p className={/[a-z]/.test(password) ? "ok" : "error"}>
                            {/[a-z]/.test(password) ? "✅" : "❌"} Una letra minúscula
                        </p>

                        <p className={/\d/.test(password) ? "ok" : "error"}>
                            {/\d/.test(password) ? "✅" : "❌"} Un número
                        </p>

                        <p className={/[@$!%*?&.#_-]/.test(password) ? "ok" : "error"}>
                            {/[@$!%*?&.#_-]/.test(password) ? "✅" : "❌"} Un carácter especial
                        </p>

                    </div>

                    <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={confirmar}
                        onChange={(e)=>setConfirmar(e.target.value)}
                    />

                    <button
                        onClick={registrar}
                    >

                        Registrarse

                    </button>

                    <div className="registro">

                        ¿Ya tenés una cuenta?

                        <span
                            onClick={()=>navigate("/")}
                        >

                            Iniciar sesión

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}