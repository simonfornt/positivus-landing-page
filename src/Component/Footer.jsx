import React from 'react';
import Footerlogo from "../assets/footer-logo.png";
import linkdin from "../assets/Sicon1.png";
import facebook from "../assets/Sicon2.png";
import twitter from "../assets/Sicon3.png";

function Footer() {
  return (
    <div className='w-7/8 mx-auto text-white bg-black rounded-t-2xl px-6 py-8'>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0'>
        {/* Logo Section */}
        <div>
          <img src={Footerlogo} alt="Footer Logo" className='w-32' />
        </div>
        
        {/* Navigation Links */}
        <div>
          <ul className='flex flex-wrap justify-center md:justify-start gap-5 text-sm md:text-base'>
            <li><a href="#" className='hover:text-gray-400'>About us</a></li>
            <li><a href="#" className='hover:text-gray-400'>Services</a></li>
            <li><a href="#" className='hover:text-gray-400'>Use Cases</a></li>
            <li><a href="#" className='hover:text-gray-400'>Pricing</a></li>
            <li><a href="#" className='hover:text-gray-400'>Blog</a></li>
          </ul>
        </div>
        
        {/* Social Media Icons */}
        <div className='flex gap-4'>
          <a href="#"><img src={linkdin} alt="LinkedIn" className='w-6 h-6' /></a>
          <a href="#"><img src={facebook} alt="Facebook" className='w-6 h-6' /></a>
          <a href="#"><img src={twitter} alt="Twitter" className='w-6 h-6' /></a>
        </div>
      </div>

      {/* Contact and Subscription Section */}
      <div className='flex flex-col md:flex-row  items-center md:items-start py-10 gap-46'>
        {/* Contact Info */}
        <div className='text-center md:text-left'>
          <p className='bg-lime-400 px-4 py-1 inline-block text-black font-bold rounded'>Contact us</p>
          <div className='mt-2 text-sm'>
            <p>Email: info@postivious.com</p>
            <p>Phone: 555-567-8902</p>
            <p>Address: 123 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>
        
        {/* Subscription Box */}
        <div className='w-full md:w-auto flex justify-center mt-10  bg-amber-300'>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;