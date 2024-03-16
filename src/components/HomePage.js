import React from "react";
import { useLocation } from "react-router-dom";
import { FaHandPointUp } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";

const HomePage = () => {
  const { state } = useLocation();
  var phoneNumber = state?.inputValue;

  return (
    <div className='m-2 flex flex-col lg:h-screen'>
      <div className='flex-none h-10 bg-green-400 rounded flex items-center justify-center gap-2'>
        <p>46L,</p>
        <p>French latte cafe,</p>
        <p>3/16/2024,</p>
      </div>
      <div className='flex-grow h-96 bg-orange-400 rounded my-2 flex items-center justify-center '>
        <p className='text-4xl text-white'>Menu</p>
      </div>
      <div className='flex-none h-10 bg-green-400 rounded mb-2 flex items-center justify-center '>
        <p>{phoneNumber}</p>
      </div>
      <div className='flex-none h-20  rounded grid gap-3 grid-cols-4'>
        <div className='min-h-[50px] rounded bg-orange-500  flex items-center justify-center'>
          <p className='text-xs sm:text-base lg:text-2xl p-1 text-center'>
            Amount to pay
          </p>
        </div>
        <div className='min-h-[50px] rounded bg-orange-500  flex items-center justify-center'>
          <FaHandPointUp className='text-2xl sm:text-4xl lg:text-4xl' />
        </div>
        <div className='min-h-[50px] rounded bg-orange-500  flex items-center justify-center'>
          <RiBillFill className='text-2xl sm:text-4xl lg:text-4xl' />
        </div>
        <div className='min-h-[50px] rounded bg-orange-500  flex items-center justify-center'>
          <IoPersonSharp className='text-2xl sm:text-4xl lg:text-4xl' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
