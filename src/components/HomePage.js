import React from "react";
import { useLocation } from "react-router-dom";
import { FaHandPointUp } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";

const HomePage = () => {
  const { state } = useLocation();
  var phoneNumber = state?.inputValue;

  return (
    <div className=' flex flex-col fixed top-0 left-0 w-full h-full items-center justify-center'>
      <div className='flex-none h-10 w-full bg-green-400 rounded flex items-center justify-center gap-2'>
        <p>46L,</p>
        <p>French latte cafe,</p>
        <p>3/16/2024,</p>
      </div>
      <div className='flex-grow h-96 w-full bg-orange-400 rounded my-2 flex items-center justify-center '>
        <p className='text-4xl text-white'>Menu</p>
      </div>
      <div className='flex-none h-10 w-full bg-green-400 rounded mb-2 flex items-center justify-center '>
        <p>{phoneNumber}</p>
      </div>
      <div className='flex-none h-20 w-full  rounded grid gap-3 grid-cols-4'>
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
