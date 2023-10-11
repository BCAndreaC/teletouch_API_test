import { InputUserName, InputPassword, ButtonSumbit } from "./loginComponents.jsx";
import { useState } from "react";
import { loginAPI }  from "../../services/login.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const data = {
    username: username,
    password: password,
    };

    const options = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    };


  const handleSumbit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginAPI(options, setError);

      if (response) {
        console.log(response + "AKIIIIIII");
        // La respuesta contiene un token, lo que indica que el inicio de sesión fue exitoso
        navigate("/products");
      }
    } catch (error) {
      // Manejar errores de la solicitud de inicio de sesión, por ejemplo, si la API no responde
      console.error("Error al iniciar sesión:", error);
      setError(
        "Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <section className="flex bg-gunMetal min-h-screen min-w-fit">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-xl">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSumbit}>
            <InputUserName
              userName={username}
              onChange={(event) => setUserName(event.target.value)}
            />
            <InputPassword
              password={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <ButtonSumbit />
            {error && <div className="text-red-400 font-medium">{error}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

export { Login };
