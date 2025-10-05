import { IoQrCodeOutline } from 'react-icons/io5';
import { QRCodeSVG } from 'qrcode.react';

interface UrlProp {
  Url: string;
}
const QrCode = ({ Url }: UrlProp) => {
  return (
    <section className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] bg-white rounded-2xl dark:bg-gray-900 dark:text-white text-black flex justify-center items-center h-[40rem]">
      {Url ? (
        <QRCodeSVG value={Url} />
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-xs mb-3">Enter text to generate your QR code </p>
          <IoQrCodeOutline size={80} />
        </div>
      )}
    </section>
  );
};
export default QrCode;
