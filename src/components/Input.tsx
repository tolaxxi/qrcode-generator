import { useState } from 'react';
import { SketchPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';

type colorPickerType = {
  displayColorPicker: boolean;
  color: string;
};

const Input = () => {
  const [foregroundColorPicker, setForeGroundColorPicker] = useState<colorPickerType>({
    displayColorPicker: false,
    color: '#000',
  });

  function handleClick() {
    setForeGroundColorPicker((prev) => {
      return { ...prev, displayColorPicker: !foregroundColorPicker.displayColorPicker };
    });
  }
  function handleClose() {
    setForeGroundColorPicker((prev) => {
      return { ...prev, displayColorPicker: false };
    });
  }
  function handleForeGroundChange(color: { hex: string }) {
    setForeGroundColorPicker((prev) => {
      return { ...prev, color: color.hex };
    });
  }

  return (
    <section className="min-w-[90%] bg-white rounded-xl shadow-md py-10 flex  flex-col  items-center">
      {/* url or text input  */}
      <div className=" w-[90%] text-xs font-medium text-black">
        <p className="mb-1"> Text or Url</p>
        <input type="text" placeholder="Enter a link or text" className=" w-full" />
      </div>

      {/* color inputs */}
      <section className="flex justify-between text-xs font-medium w-[90%] my-5 ">
        {/*foreGround color input  */}
        <div className=" flex items-end">
          {/* foreground color picker  */}
          <div className="relative">
            <div className=" w-8 h-8 bg-gray-500 mr-5 rounded-md p-1  bo" onClick={handleClick}>
              <div className=" w-6 h-6 border" style={{ backgroundColor: foregroundColorPicker.color }} />
            </div>
            {foregroundColorPicker.displayColorPicker && (
              <SketchPicker className="absolute top-[150%]" onChange={handleForeGroundChange} />
            )}
          </div>
          {/* foreground input  */}

          <div className="">
            <p className="mb-1">Foreground Color</p>
            <EditableInput value={foregroundColorPicker.color} onChange={handleForeGroundChange} />
          </div>
        </div>

        {/* background color input */}
        <div>
          <p className="mb-1">Background Color</p>
          <input type="text" />
        </div>
      </section>
    </section>
  );
};
export default Input;
