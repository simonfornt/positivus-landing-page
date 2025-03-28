import React from 'react'
import Footerlogo from "../assets/footer-logo.png";
import linkdin from "../assets/Sicon1.png";
import facebook from "../assets/Sicon2.png";
import twitter from "../assets/Sicon3.png";

function Footer() {
  return (
    <div className='w-7/8 mx-auto text-white rounded-t-2xl bg-black'>
      <div className='flex justify-between pt-6 px-10'>
          <div>
            <img src={Footerlogo} alt="" />
          </div>
          <div>
            <ul className='flex gap-5'>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Use Cases</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className='flex gap-4'>
            <span><img src={linkdin} alt="" /></span>
            <span> <img src={facebook} alt="" /></span>
            <span><img src={twitter} alt="" /></span>
          </div>
      </div>
    </div>
  )
}

export default Footer;