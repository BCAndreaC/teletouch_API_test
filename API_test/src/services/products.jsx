export function fetchProducts() {
  return fetch("https://dummyjson.com/products?limit=0", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}

export function patchProduct(id, title, price) {
  if (!id) throw new Error("You must provide an id");
  return fetch(`https://dummyjson.com/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      price: price,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}
