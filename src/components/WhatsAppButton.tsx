import React from 'react';
import { Phone } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ message = "Hi, I'd like to place an order!", className = "", children }: WhatsAppButtonProps) => {
  const phone = "9767216191";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 ${className}`}
    >
      <Phone size={20} />
      <span>{children || "Order on WhatsApp"}</span>
    </a>
  );
};

export default WhatsAppButton;