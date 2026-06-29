import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/images/logo.jpg";

export default function Login() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    function ingresar() {

        setLoading(true);

        setTimeout(() => {

            navigate("/home");

        }, 1000);

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

                    <h1>OutdoorApp</h1>

                    <p>
                        Descubrí nuevas rutas y conectate con personas que comparten tu pasión por la naturaleza.
                    </p>

                    <input
                        placeholder="Correo electrónico"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                    />

                    {

                        !loading ?

                            <button onClick={ingresar}>

                                Iniciar sesión

                            </button>

                            :

                            <button disabled>

                                ⏳ Iniciando sesión...

                            </button>

                    }

                    <div className="registro">

                        ¿No tenés una cuenta?

                        <span onClick={() => navigate("/registro")}>

                            Registrate

                        </span>

                    </div>

                </div>

            </div>

        </div>

    )

}