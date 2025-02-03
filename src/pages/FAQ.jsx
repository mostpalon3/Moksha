import React, { useState } from 'react'
import { Group } from '../components/Group'

  const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const faqs = [
      {
        question: "This is what it is?",
        answer: "I dont know what it is but it is something."
      },
      {
        question: "This is what it is?",
        answer: "I dont know what it is but it is something."
      },
      {
        question: "This is what it is?",
        answer: "I dont know what it is but it is something."
      },
      {
        question: "This is what it is?",
        answer: "I dont know what it is but it is something."
      },
      {
        question: "This is what it is?",
        answer: "I dont know what it is but it is something."
      },
      
    ];

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <Group className='flex items-center justify-center absolute left-[13314px]  h-screen'>
      <div>
        <div className="w-[129px] h-[129px] rounded-full border-white items-center border-[1px] bg-[#060617] flex relative top-[-42dvh] left-[-48dvh]">
          <span className=' text-white text-[36px]'>Category</span>
        </div>
        <div className="w-[129px] h-[129px] rounded-full border-white items-center border-[1px] bg-[#060617] flex relative top-[-25dvh] left-[-78dvh]">
          <span className=' text-white text-[36px]'>Accomodation</span>
        </div>
        <div className="w-[129px] h-[129px] rounded-full border-white items-center border-[1px] bg-[#060617] flex relative top-[-15dvh] left-[-55dvh]">
          <span className=' text-white text-[36px]'>Eatables</span>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center relative left-[-10dvh] top-[-27dvh]'>
      <h1 className='text-[64px] text-white font-cinzel'>FAQs</h1>
      <div className="w-auto p-4 space-y-2">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="border-[1px] border-white rounded-[16px] bg-[#21252F99] backdrop-blur-sm shadow-sm flex flex-col relative left-[-25dvh] mb-[1.5dvh]"
        >
          <button
            className="p-[2dvh] w-[603px] h-[77px] text-left flex justify-between items-center " 
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium text-white">{faq.question}</span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-white">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
        <div className="w-[129px] h-[129px] rounded-full border-white items-center border-[1px] bg-[#060617] flex relative left-[-10dvh] top-[8dvh]">
          <span className=' text-white text-[36px]'>Manifests</span>
        </div>
    </div>
      </div>
      <div>
        <div className="w-[129px] h-[129px] rounded-full border-white items-center border-[1px] bg-[#060617] flex relative top-[10dvh] left-[-23dvh]">
          <span className=' text-white text-[36px]'>Entry</span>
        </div>
        <div className="w-[129px] h-[129px] rounded-full border-white items-center border-[1px] bg-[#060617] flex relative top-[-45dvh] left-[-5dvh]">
          <span className=' text-white text-[36px] text-nowrap'>Dress Code</span>
        </div>
        <div className="w-[129px] h-[129px] rounded-full border-white items-center border-[1px] bg-[#060617] flex relative top-[-53dvh] left-[30dvh]">
          <span className=' text-white text-[36px]'>Something</span>
        </div>
        <div className="w-[129px] h-[129px] rounded-full border-white items-center border-[1px] bg-[#060617] flex relative top-[-40dvh] left-[50dvh]">
          <span className=' text-white text-[36px]'>Scoring</span>
        </div>
      </div>
    </Group>
  )
}

export default FAQ
