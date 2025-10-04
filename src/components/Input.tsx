const Input = () => {
  return (
    <section className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] bg-white p-7 rounded-2xl dark:bg-gray-900 dark:text-white text-black">
      {/* Url input  */}
      <div className="flex flex-col text-sm">
        <label htmlFor="Url-input"> Text or URL</label>
        <input type="text" id="Url-input" placeholder=" Enter Text or Url" />
      </div>

      {/* color inputs */}
    </section>
  );
};
export default Input;
