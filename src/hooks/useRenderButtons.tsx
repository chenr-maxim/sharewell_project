"use client";

import { useCallback } from "react";

const useRenderButtons = (
  color: string,
  handleOpenModal: (modal: string) => void
) => {
  return useCallback(() => {
    switch (color) {
      case "green":
        return (
          <>
            <button
              onClick={() => handleOpenModal("modal1")}
              className="mt-4 bg-white text-black px-4 py-3 rounded">
              Open Modal 1
            </button>
            <button
              onClick={() => handleOpenModal("modal2")}
              className="mt-4 bg-white text-black px-4 py-3 rounded">
              Open Modal 2
            </button>
          </>
        );
      case "blue":
        return (
          <>
            <button
              onClick={() => handleOpenModal("modal2")}
              className="mt-4 bg-white text-black px-4 py-3 rounded">
              Open Modal 2
            </button>
            <button
              onClick={() => handleOpenModal("modal3")}
              className="mt-4 bg-white text-black px-4 py-3 rounded">
              Open Modal 3
            </button>
          </>
        );
      case "red":
        return (
          <>
            <button
              onClick={() => handleOpenModal("modal1")}
              className="mt-4 bg-white text-black px-4 py-3 rounded">
              Open Modal 1
            </button>
            <button
              onClick={() => handleOpenModal("modal3")}
              className="mt-4 bg-white text-black px-4 py-3 rounded">
              Open Modal 3
            </button>
          </>
        );
      default:
        return null;
    }
  }, [color, handleOpenModal]);
};

export default useRenderButtons;
