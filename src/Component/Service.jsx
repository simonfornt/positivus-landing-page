import React from 'react'
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";

const services = [card1,card2,card3,card4,card5,card6];

function Service() {
  return (
    <div className='w-7/8 mx-auto'>
        <div className='flex  gap-8 mt-12 flex-wrap-reverse items-center'>
            <button className=' bg-[#B9FF66]  px-6 font-medium rounded-lg text-[40px] hover:bg-lime-400'>Services</button>
            <p>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 mt-10'>

            {services.map((services, i) => (
                <li key={i} className='list-none'>
                    <img src={services} alt="" />
                </li>
            ))}

        </div>
    </div>
  )
}

export default Service;