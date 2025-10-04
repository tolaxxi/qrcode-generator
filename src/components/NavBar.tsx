import { useContext } from 'react';
import { BsQrCode } from 'react-icons/bs';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { ThemeContext } from '../context/ThemeContext';

const NavBar = () => {
  const { isDark, toggleIsDark } = useContext(ThemeContext);

  return (
    <header className="flex justify-between relative w-full  shadow-md items-center px-6 py-2  bg-white dark:bg-gray-900">
      <div className="flex items-center flex-nowrap">
        <span className="bg-indigo-400 p-2 rounded-lg">
          <BsQrCode size={25} color="white" />
        </span>
        <div className="ml-3 text-nowrap">
          <h1 className="font-medium text-lg sm:text-2xl text-gray-900 dark:text-white">QR Code Generator</h1>
          <p className="text-zinc-500 text-xs sm:text-sm dark:text-gray-400">Create beautiful Qr code instantly</p>
        </div>
      </div>

      <button className="text-indigo-400" onClick={toggleIsDark}>
        {isDark ? <MdOutlineLightMode size={25} /> : <MdOutlineDarkMode size={25} />}
      </button>
    </header>
  );
};
export default NavBar;
