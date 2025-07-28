import { Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6285887535612"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
        <Tooltip content="Hubungi Badriana untuk pertanyaan atau bantuan">
          <Button className="bg-transparent">
            <Icon icon="logos:whatsapp-icon" width="28" height="28" />
          </Button>
        </Tooltip>
      </div>
    </a>
  );
}
