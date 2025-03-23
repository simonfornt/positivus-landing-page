import React from 'react'
import  proposalimg from "../assets/proposal-img.png";

const proposal = {
    title: `Let’s make things happen`,
    des: `Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.`,
    btntext: `Get your free proposal`,
    pImage: proposalimg
}

function Proposal() {
  return (
    <div className='w-7/8 mx-auto mt-20'>
        <div className='flex flex-wrap-reverse px-10 bg-gray-100 rounded-3xl justify-between items-center'>
            <div>
                <h1 className='text-[30px] font-medium my-6'>{proposal.title}</h1>
                <p className='md:w-sm mb-5'>{proposal.des}</p>
                <button className='bg-black hover:border-red-500 hover:animate-pulse text-white py-3 rounded-xl px-6'>{proposal.btntext}</button>
            </div>
            <div>
                <img src={proposal.pImage} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Proposal;