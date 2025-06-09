import Image from "next/image";

const WhatsAppButton = () => {
  const whatsappNumber = "+917009191019"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}`;

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 rounded-3xl p-4 shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;