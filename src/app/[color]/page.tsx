"use client";

import ModalComponent from "@/components/ModalComponent";
import {
  Modal1Details,
  Modal2Details,
  Modal3Details,
} from "@/constants/labels";
import useRenderButtons from "@/hooks/useRenderButtons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ColorPage = () => {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setModalOpen] = useState<{ [key: string]: boolean }>({
    modal1: false,
    modal2: false,
    modal3: false,
  });
  const pathname = usePathname();
  const color = pathname?.split("/")[1] || "white";

  const handleOpenModal = (modal: string) => {
    setModalOpen((prev) => ({ ...prev, [modal]: true }));
  };

  const handleCloseModal = (modal: string) => {
    setModalOpen((prev) => ({ ...prev, [modal]: false }));
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "green":
        return "bg-green-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-white";
    }
  };

  const renderButtons = useRenderButtons(color, handleOpenModal);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    getColorClass(color)
  );

  useEffect(() => {
    setBackgroundColor(getColorClass(color));
    setMounted(true);
  }, [color]);

  if (!mounted) {
    return null;
  }

  const modals = [
    { key: "modal1", details: Modal1Details },
    { key: "modal2", details: Modal2Details },
    { key: "modal3", details: Modal3Details },
  ];

  return (
    <div className={`${backgroundColor} min-h-[200vh] w-screen`}>
      <h1 className="text-white text-center text-xl capitalize">
        {color} Page
      </h1>
      <div className="text-black flex flex-col items-center gap-4">
        {renderButtons()}
      </div>
      {modals.map((modal) => (
        <ModalComponent
          key={modal.key}
          isOpen={isModalOpen[modal.key]}
          onClose={() => handleCloseModal(modal.key)}
          details={modal.details}
        />
      ))}
    </div>
  );
};

export default ColorPage;
