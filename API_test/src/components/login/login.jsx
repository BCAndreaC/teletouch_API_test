import {
  InputUserName,
  InputPassword,
  ButtonSumbit,
} from "./loginComponents.jsx";
import { useState } from "react";
import { loginAPI } from "../../services/login.jsx";
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
      if (response.token) {
        navigate("/products");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError(
        "Error al iniciar sesión. Por favor, verifica tus credenciales."
      );
    }
  };

  return (
    <section className="flex bg-gunMetal min-h-screen min-w-fit">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 text-xl">
        <h1 className="text-center text-5xl">Teletouch</h1>
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
