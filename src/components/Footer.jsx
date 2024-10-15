import React from 'react'
import { assets } from '../assets'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-[#d9d9d9] font-sans bg-customPurple flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-[100px]" id="footer">
      <div className="w-full flex flex-col gap-8 md:grid md:grid-cols-[2fr_1fr_1fr] md:gap-20 max-w-6xl">
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} width={120} alt="logo" className='-mt-10 md:-mt-6' />
          <p>
          Order from the comfort of your home and track your delivery in real time. Enjoy fresh, hot meals with just a few clicks!
          </p>
          <div className="flex cursor-pointer">
            <FaFacebookF style={{color:'white', margin:'10px', cursor:'pointer'}}/>
            <FaInstagram style={{color:'white', margin:'10px', cursor:'pointer'}} />
            <FaXTwitter style={{color:'white', margin:'10px', cursor:'pointer'}}/>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className='text-white font-bold text-2xl tracking-wider'>COMPANY</h2>
          <ul className='flex gap-5 md:flex-col md:gap-0'>
            <li className='list-none mb-2.5 cursor-pointer'>Home</li>
            <li className='list-none mb-2.5 cursor-pointer'>About us</li>
            <li className='list-none mb-2.5 cursor-pointer'>Delivery</li>
            <li className='list-none mb-2.5 cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className='text-white font-bold text-2xl tracking-wider'>CONTACT US</h2>
          <ul className='flex gap-3 md:flex-col md:gap-0'>
            <li className='list-none mb-2.5 cursor-pointer'>+234 7038149162 </li>
            <li className='list-none mb-2.5 cursor-pointer'>contact@ajoksdelight.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-0.5 md:my-5 mx-0 bg-gray-400 border-none'/>
      <p className="text-center">
        Copyright 2024 &copy; ajoksdelight.com {" - "}<br className='block md:hidden'/> All Right Reserved
      </p>
    </div>
  )
}

export default Footer
