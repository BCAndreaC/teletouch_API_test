export function fetchProducts() {
  return fetch("https://dummyjson.com/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      // Puedes manejar el error o redirigir aquí
      // navigate("/login");
    });
}
