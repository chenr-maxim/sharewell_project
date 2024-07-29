import React, { useRef, useEffect } from "react";
import { ModalDetails } from "@/types/ModalTypes";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: ModalDetails;
}

const ModalComponent = ({ isOpen, onClose, details }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg md:w-[650px] w-[339px] overflow-hidden"
        style={{ boxShadow: "0px 4px 4px 0px #00000025" }}>
        <div className="bg-[#687CEB] font-medium p-12 h-[224px]">
          <h2 className="text-white text-[32px]">{details.header}</h2>
          <p className="text-white mt-2 text-[14px]">{details.subHeader}</p>
          <p className="text-white mt-2 text-[16px]">{details.date}</p>
          <p className="text-white text-[16px]">{details.time}</p>
        </div>
        <div className="p-[24px] relative">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 font-bold text-[14px]">Lorem Ipsum</p>
              <p className="text-blue-500 font-bold"> Lorem Ipsum </p>
            </div>
            <button onClick={onClose} className="text-gray-500">
              x
            </button>
          </div>
          <p className="h-[80px] text-gray-700 text-[16px] mt-[14px]">
            {details.content}
          </p>
        </div>
        <div className="flex flex-col p-[24px] w-full gap-[10px]">
          <div className="text-[#4A4A52] w-full flex items-center justify-center">
            Lorem Ipsum is simply dummy text.
          </div>
          <button
            disabled
            className="w-full bg-[#32A7AD1A] text-gray-300 py-[12px]">
            LOREM IPSUM
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalComponent;
