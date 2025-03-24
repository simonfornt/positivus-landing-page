import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`border  border-gray-300 rounded-lg mb-4 transition-colors ${isOpen ? 'bg-white' : ''}`}>
      <button 
        className={`w-full p-4 text-left flex justify-between items-center 
          ${isOpen ? 'bg-gray-00' : 'bg-gray-00'} 
          hover:bg-gray-200 transition-colors rounded-lg`}
        onClick={onClick}
      >
        <span className="text-[30px] font-medium text-gray-800">{title}</span>
        <span className={`text-gray-600 text-xl font-semibold transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 text-[#] bg-[#B9FF66] rounded-b-lg">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-full mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

// Example usage
const App = () => {
  const accordionItems = [
    {
      title: '01 Consultation',
      content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      title: ' 02 Research and Strategy Development',
      content: 'Content for section 2 goes here...',
    },
    {
      title: '03 Implementation',
      content: 'Content for section 3 goes here...',
    },
  ];

  return (
    <div className="app w-7/8 mx-auto ">
       <div className='flex  gap-8 my-12 flex-wrap-reverse items-center'>
            <button className=' bg-[#B9FF66]  px-6 font-medium rounded-lg text-[40px] hover:bg-lime-400'>Our Working Process</button>
            <p>Step-by-Step Guide to Achieving <br /> Your Business Goals</p>
        </div>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;