import { IoQrCodeOutline } from 'react-icons/io5';

const QrCode = () => {
  return (
    <section className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] bg-white p-7 rounded-2xl dark:bg-gray-900 dark:text-white text-black flex flex-col justify-center items-center min-h-[75%]">
      <p className="text-xs mb-3">Enter text to generate your QR code </p>
      <IoQrCodeOutline size={80} />
    </section>
  );
};
export default QrCode;
