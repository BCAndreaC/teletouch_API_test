export function loginAPI(options, setError) {
  let token = "";

  return fetch("https://dummyjson.com/auth/login", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Error al iniciar sesión. Por favor, verifica tus credenciales."
        );
      }
      return response.json();
      
    })
    .then((data) => {
      token = data.token;
      localStorage.setItem("token", token);
      return { token };
    })
    // .then(console.log)
    .catch((error) => {
      console.error(error);
      setError("Error al iniciar sesión. Por favor, verifica tus credenciales");
    });
}
