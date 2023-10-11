import { fetchProducts } from "../../services/products";
import { useState, useEffect } from "react";
import { ListProducts } from "./productsComponents";
import { patchProduct } from "../../services/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const notifyEdit = () => toast.success("Producto editado");

  function handleProducts() {
    return fetchProducts()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }
  function handleEditProduct(id, title, price) {
    return patchProduct(id, title, price)
      .then(() => {
        handleProducts();
        notifyEdit();
      })
      .catch((error) => {
        console.error("Error handling edit data", error);
      });
  }

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div>
      <ListProducts
        products={products}
        handleEditProduct={handleEditProduct}
        handleProducts={handleProducts}
      />
      <ToastContainer
        theme="dark"
        toastClassName={() =>
          "flex bg-blackInput p-4 rounded justify-between border-2 border-kitchenText"
        }
        bodyClassName={() => "flex flex-row text-kitchenText items-center"}
        hideProgressBar
      />
    </div>
  );
}
