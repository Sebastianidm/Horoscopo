import React, { useState } from "react";
import { signosZodiacales } from "../../data";

const GridComponent = () => {
  const colorComun = "#c24df0";
  const [modalContent, setModalContent] = useState(null);

  const openModal = (text) => {
    setModalContent(text);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-center "
        style={{
          maxHeight: "85vh",
          overflowY: "auto",
          margin: "20px 40px 20px",
        }}
      >
        {signosZodiacales.map((signo) => (
          <div
            key={signo.name}
            className="border rounded-lg h-80 flex flex-col justify-between"
            style={{ backgroundColor: colorComun }}
          >
            <div>
              <h1 className="text-white text-xl">{signo.name}</h1>
              <img
                src={signo.image}
                alt={signo.name}
                className="w-1/2 mx-auto"
              />
            </div>
            <button
              onClick={() => openModal(signo.text)}
              className="text-pretty text-white bg-violet-600 mx-auto text-lg rounded-lg border m-4 p-2"
            >
              Leer Más
            </button>
          </div>
        ))}
      </div>

      {modalContent && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full text-center">
            <h1 className="text-xl font-bold">
              {
                signosZodiacales.find((signo) => signo.text === modalContent)
                  .name
              }
            </h1>
            <p>{modalContent}</p>
            <button
              onClick={closeModal}
              className="text-white bg-violet-600 mx-auto mt-4 text-lg rounded-lg border p-2 block"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridComponent;
