import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalView = () => {
  const navigate = useNavigate();
  const [phoneModal, setPhoneModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOlderOrder = () => {
    setPhoneModal(true);
  };
  const handleNewOrder = () => {
    setPhoneModal(true);
  };

  const handleOrder = () => {
    if (inputValue.length === 0) {
      return null;
    }
    navigate("/homepage", { state: { inputValue } });
    setInputValue("");
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
      {phoneModal ? (
        <div className='h-40 w-64 rounded-lg bg-orange-300 flex flex-col gap-5 items-center justify-center'>
          <input
            className='placeholder:italic placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 sm:text-sm'
            placeholder='Enter phone number'
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className='px-7 py-2 rounded-full text-white font-semibold bg-gray-600'
            onClick={handleOrder}
          >
            Enter
          </button>
        </div>
      ) : (
        <div className='h-40 w-64 rounded-lg bg-orange-300 flex flex-col gap-5 items-center justify-center'>
          <button
            className='px-7 py-2 rounded-full text-white font-semibold bg-gray-600'
            onClick={handleOlderOrder}
          >
            Older order
          </button>
          <button
            className='px-7 py-2 rounded-full text-white font-semibold bg-gray-600'
            onClick={handleNewOrder}
          >
            New order
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalView;
