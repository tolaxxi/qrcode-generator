import { useState } from 'react';

interface InputProps {
  setUrl: (value: string) => void;
}

const Input = ({ setUrl }: InputProps) => {
  const [input, setInput] = useState('');

  function generateQrCode() {
    setUrl(input);
    setInput('');
  }
  function resetQrCode() {
    setUrl('');
  }

  return (
    <section className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] bg-white p-7 rounded-2xl dark:bg-gray-900 dark:text-white text-black">
      {/* Url input  */}
      <div className="flex flex-col text-sm">
        <label htmlFor="Url-input"> Text or URL</label>
        <input
          type="text"
          id="Url-input"
          placeholder=" Enter Text or Url"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>

      {/* color inputs */}

      {/* <div className="flex flex-col text-sm">
        <label htmlFor="Url-input"> Text or URL</label>
        <input type="text" id="Url-input" placeholder=" Enter Text or Url" />
      </div> */}

      {/* generate and reset button  */}

      <div className="w-full flex justify-between my-5">
        <button
          type="submit"
          className=" font-medium dark:text-black bg-indigo-400 text-white px-5  w-[70%] md:w-[75%] sm:w-[80%] lg:w-[70%] xl:w-[80%] 2xl:w-[90%] text-xs rounded-md"
          onClick={generateQrCode}
        >
          Generate QR Code
        </button>
        <button
          type="submit"
          className="border-2 font-medium text-zinc-300 py-1.5 px-2 rounded-md"
          onClick={resetQrCode}
        >
          Reset
        </button>
      </div>
    </section>
  );
};
export default Input;
