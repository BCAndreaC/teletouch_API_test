import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment, useRef } from "react";
import PropTypes from "prop-types";

function ListProducts({ products, handleEditProduct }) {
  const [selectedProductEdit, setSelectedProductEdit] = useState(null);

  ListProducts.propTypes = {
    products: PropTypes.array.isRequired,
    handleEditProduct: PropTypes.func.isRequired,
  };

  return (
    <div className="bg-blackInput ">
      <div className="mx-auto max-w-2xl px-6 py-10 sm:px-10 sm:py-30 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl text-center not-sr-only ">Productos</h1>
        <br />
        <div className="lg:max-w-7xl lg:px-8 mx-auto my-auto w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <table className=" bg-blackInput table-auto mx-auto w-full ">
            <thead>
              <tr className="border-b border-whiteText  md:h-16 md:text-xl m-6">
                <th className="md:w-22">ID</th>
                <th className="md:w-40">Nombre</th>
                <th className="md:w-30">Precio</th>
                <th className="md:w-24">Categoria</th>
                <th className="md:w-26"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-whiteText sm:h-10 md:h-16 md:text-xl text-center  "
                >
                  <td>{u.id}</td>
                  <td>{u.title}</td>
                  <td>${u.price}</td>
                  <td>{u.category}</td>
                  <td
                    onClick={() => setSelectedProductEdit(u.id)}
                    className="text-yellowTimer font-medium hover:cursor-pointer"
                  >
                    Editar
                  </td>
                  {selectedProductEdit !== null && (
                    <ModalEditProducts
                      selectedProductEdit={selectedProductEdit}
                      onClose={() => setSelectedProductEdit(null)}
                      products={products}
                      onSubmit={handleEditProduct}
                    ></ModalEditProducts>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <></>
    </div>
  );
}

function ModalEditProducts({
  selectedProductEdit,
  onClose,
  onSubmit,
  products,
}) {
  ModalEditProducts.propTypes = {
    selectedProductEdit: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
  };
  const selectedProduct = products.find((u) => u.id === selectedProductEdit);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  if (!selectedProduct) {
    return null;
  }

  return (
    <Transition.Root show={open !== null} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gunMetal text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-gunMetal px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h2"
                        className="text-base font-semibold leading-6 text-whiteText mt-2"
                      >
                        {" "}
                        Editar producto {selectedProductEdit}
                      </Dialog.Title>

                      <div className="mt-2">
                        <form className="p-6 pt-6">
                          <label className="text-sm text-white">Nombre</label>
                          <input
                            type="text"
                            placeholder={selectedProduct.title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 mb-5 text-sm text-black"
                            required
                          />
                          <label className="text-sm text-white">Precio</label>
                          <input
                            type="number"
                            placeholder={selectedProduct.price.toString()}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 mb-5 text-sm text-black"
                            required
                          />
                          <br />
                          <div className="w-full bg-gunMetal sm:flex sm:flex-row-reverse sm:px-6 mb-4 mr-6 mt-4 justify-center">
                            <button
                              type="submit"
                              className="my-2 inline-flex w-full justify-center rounded-md bg-greenConfirm px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:ml-3 sm:w-26 mr-6"
                              onClick={() => {
                                onSubmit(selectedProductEdit, title, price);
                                onClose();
                              }}
                            >
                              Editar
                            </button>
                            <button
                              type="button"
                              className=" my-2 inline-flex w-full justify-center rounded-md outline outline-1 outline-red-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-26 mr-6 "
                              onClick={() => onClose()}
                              ref={cancelButtonRef}
                            >
                              Cancelar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export { ListProducts };
