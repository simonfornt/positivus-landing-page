import React from 'react';
import Button from './Button';

function Hero({ title, description, buttonText, imageSrc }) {
  return (
    <div className='w-7/8 mx-auto flex flex-wrap-reverse justify-between items-center'>
      <div className='w-xl text-center md:text-left'>
        <h1 className='text-[60px] leading-18  mb-4'>{title}</h1>
        <p className='mb-6'>{description}</p>
        <Button/>
      </div>
      <div className='mt-6'>
        <img src={imageSrc} alt="Hero Section" />
      </div>
    </div>
  );
}

export default Hero;