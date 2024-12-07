import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function HomeContact(){
  // emailjs function
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_g11kyph', 'template_thnx1wl', form.current, {
        publicKey: 'F6TYlv5eX_5UX1ThJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

    <div className='w-full bg-[#121212] flex flex-col px-[37px] md:px-[5%] pb-20'>
      {/* Contact Title */}
        <h2 className="bg-gradient-to-b from-[#C4C4C4] to-[#7E7E7E] bg-clip-text text-transparent font-bold uppercase mb-[1rem] max-md:text-[14px]  md:text-[2rem] md:mb-[24px]">
            contact
        </h2>
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-[98%] gap-y-[8px] sm:w-[522px]'>
         <input type="text" name="user_name" placeholder='Full Name' required className='bg-[#242424] border border-[#4D4D4D] rounded-[8px] placeholder:text-[#C4C4C499] placeholder:pl-[22px] placeholder:text-[12px] py-[15.5px] md:text-[1rem]'/>
         <input type="email" name="user_email" placeholder='Email' required className='bg-[#242424] border border-[#4D4D4D] rounded-[8px] placeholder:text-[#C4C4C499] placeholder:pl-[22px] placeholder:py-[1rem] py-[15.5px] placeholder:text-[12px] md:text-[1rem]'/>
         <input type="number" name="user_number" placeholder='Phone Number' required className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-[#242424] border border-[#4D4D4D] rounded-[8px] placeholder:text-[#C4C4C499] placeholder:pl-[22px] placeholder:py-[1rem] py-[15.5px] placeholder:text-[12px] md:text-[1rem]'/>
         <textarea name="message" placeholder='Message' required className='resize-none h-[140px] bg-[#242424] pl-[22px] border-[#4D4D4D] border rounded-[8px] placeholder:text-[#C4C4C499] py-[15.5px] placeholder:text-[12px] md:text-[1rem]'  />
         <div className='flex justify-end'>
            <input type="submit" value="Submit" className='rounded-[10px] border-2 w-[137px] h-[36px] border-[#4D4D4D] text-[#C4C4C499] cursor-pointer md:text-[1rem]'/>
         </div>
        </form>
    </div>
  );
};