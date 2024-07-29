import React, { useRef, useEffect } from "react";
import { ModalDetails } from "@/types/ModalTypes";
import Image from "next/image";

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
        <div className="relative bg-[#687CEB] w-full font-medium h-[224px] flex justify-between items-center overflow-hidden">
          <div className="py-[48px] pl-[43px] relative z-10">
            <h2 className="text-white text-[32px]">{details.header}</h2>
            <p className="text-white mt-2 text-[14px]">{details.subHeader}</p>
            <p className="text-white mt-2 text-[16px]">{details.date}</p>
            <p className="text-white text-[16px]">{details.time}</p>
          </div>
          <div className="relative h-full w-[150px] md:w-[350px] z-0">
            <Image src="/logo.svg" alt="Logo" layout="fill" />
          </div>
        </div>
        <div className="p-[24px] relative">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 font-bold text-[14px]">Lorem Ipsum</p>
              <p className="text-blue-500 font-bold"> Lorem Ipsum </p>
            </div>
            <button onClick={onClose} className="text-gray-500">
              ×
            </button>
          </div>
          <p className="h-[80px] text-gray-700 text-[16px] mt-[14px]">
            {details.content}
          </p>
        </div>
        <div className="flex flex-col p-[24px] w-full gap-[10px] border-t border-gray-300">
          <div className="font-medium	text-[#4A4A52] w-full flex items-center justify-center">
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
