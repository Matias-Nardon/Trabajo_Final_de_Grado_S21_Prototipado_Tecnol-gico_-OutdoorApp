import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [usuario, setUsuario] = useState({

        nombre: "Matías Nardon",

        correo: "matias@email.com",

        edad: "28",

        provincia: "Córdoba",

        nivel: "Intermedio",

        actividad: "Trekking",

        objetivo: "Recreación"

    });

    return (

        <UserContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >

            {children}

        </UserContext.Provider>

    );

}