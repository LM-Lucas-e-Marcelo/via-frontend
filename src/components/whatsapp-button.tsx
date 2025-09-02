import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton: React.FC<{ whatsappNumber?: string }> = ({
  whatsappNumber,
}) => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};
