import React from 'react'

function Casesection() {
  return (
    <div className='w-7/8 mx-auto mt-20'>
        <div className='flex  gap-8 mt-12 flex-wrap-reverse items-center'>
            <button className=' bg-[#B9FF66]  px-6 font-medium rounded-lg text-[40px] hover:bg-lime-400'>Case studies</button>
            <p>Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</p>
        </div>
        <div className='text-white bg-black flex-wrap items-center justify-around rounded-3xl flex mt-10'>
            <div className='py-9 '>
                <p>
                For a local restaurant, we <br /> implemented a targeted PPC <br />
                 campaign that resulted in a 50% <br /> increase in website 
                 traffic and a <br /> 25% increase in sales.
                </p>
                <button className='text-lime-400 mt-5'>
                    Learn more
                </button>
            </div>
            <div className='py-9'>
                <p>
                For a B2B software company, we <br />
                 developed an SEO strategy
                 that <br />
                  resulted in a first page ranking <br />
                   for key keywords 
                 and a 200%  <br />
                 increase in organic traffic.
                </p>
                <button className='text-lime-400 mt-5'>
                    Learn more
                </button>
            </div>
            <div className='py-9'>
                <p>
                For a national retail chain, we <br />
                 created a social media <br />
                  marketing
                 campaign that <br />
                  increased followers by 25% and <br />
                   generated a
                  20% increase  <br />
                  in online sales.
                </p>
                <button className='text-lime-400 mt-5'>
                    Learn more
                </button>
            </div>
        </div>

    </div>
  )
}

export default Casesection;