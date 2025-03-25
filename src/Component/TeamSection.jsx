import React from 'react';
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";

function TeamSection() {
  const teamMembers = [
    { id: 1, image: team1, name: "John Doe",  },
    { id: 2, image: team2, name: "Jane Smith", },
    { id: 3, image: team3, name: "Mike Johnson", },
    { id: 4, image: team4, name: "Sarah Wilson",},
    { id: 5, image: team5, name: "Chris Brown",  },
    { id: 6, image: team6, name: "Emily Davis",  },
  ];

  return (
    <div className='w-7/8 mx-auto'>
      <div className='flex gap-8 mt-12 flex-wrap-reverse items-center'>
        <button className='bg-[#B9FF66] px-6 font-medium rounded-lg text-[40px] hover:bg-lime-400'>
          Team
        </button>
        <p className='text-lg'>
          Meet the skilled and experienced team behind our <br /> 
          successful digital marketing strategies
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {teamMembers.map((member) => (
          <div key={member.id} className='group relative'>
            <img 
              src={member.image} 
              alt={member.name} 
              className='w-full h-auto rounded-lg transition-opacity hover:opacity-90'
            />
            {/* <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity'>
              <h3 className='font-bold text-xl'>{member.name}</h3>
              <p className='text-[#B9FF66]'>{member.role}</p>
            </div> */}
          </div>
        ))}
      </div>

      <div className='mt-8 flex justify-end'>
        <button className='bg-black rounded-lg text-white py-3 px-9 hover:bg-gray-800 transition-colors'>
          See them all
        </button>
      </div>
    </div>
  )
}

export default TeamSection;