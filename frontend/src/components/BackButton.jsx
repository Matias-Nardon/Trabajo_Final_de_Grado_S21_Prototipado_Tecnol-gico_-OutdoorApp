import { useNavigate } from "react-router-dom";

export default function BackButton() {

    const navigate = useNavigate();

    return (

        <button
            onClick={() => navigate(-1)}
            style={{
                background: "#2E7D32",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                marginBottom: "20px",
                cursor: "pointer"
            }}
        >
            ← Volver
        </button>

    );

}