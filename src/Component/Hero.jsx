import React from 'react';

function Hero({ title, description, buttonText, imageSrc }) {
  return (
    <div className='w-7/8 mx-auto flex flex-wrap-reverse justify-between items-center'>
      <div className='w-xl text-center md:text-left'>
        <h1 className='text-[60px] leading-18  mb-4'>{title}</h1>
        <p className='mb-6'>{description}</p>
        <button className='text-white text-center bg-black py-3 px-6 rounded-lg'>{buttonText}</button>
      </div>
      <div className='mt-6'>
        <img src={imageSrc} alt="Hero Section" />
      </div>
    </div>
  );
}

export default Hero;