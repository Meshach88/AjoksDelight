import React from 'react'
import { assets } from '../assets'

const Services = () => {
  return (
    <div className='flex justify-center items-center'>
        <section className='max-w-6xl flex flex-col items-center justify-center mb-5 md:mb-16'>
            <h1 className='font-bold text-2xl sm:text-4xl text-center mb-2'>Our Services</h1>
            <hr className='border-2 border-black w-10 rounded-xl md:mb-10'/>
            <article className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4 items-center'>
                <div className='m-4 p-4 md:p-0 max-w-xl'>
                    <h2 className='font-bold text-center text-xl md:text-2xl mb-4'>Events</h2>
                  <div className='rounded-lg shadow-xl flex flex-col items-center'>
                    <img src={assets.events1} alt="catering events" className='w-full md:h-[272px] rounded-t-lg' />
                    <p className='p-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam similique voluptatem nihil optio vero! Porro excepturi totam dolores, enim repellat fuga nobis blanditiis expedita quo numquam eum magnam quod dolorum</p>
                    <button className='bg-customPurple text-white p-3 mb-10 md:w-1/3 rounded-md hover:bg-customYellow cursor-pointer'>More Info</button>
                  </div>
                </div>
                <div className='m-4 p-4 md:p-0 max-w-xl'>
                    <h2 className='font-bold text-center text-xl md:text-2xl mb-4'>Catering services</h2>
                  <div className='rounded-lg shadow-xl flex flex-col items-center'>
                    <img src={assets.catering} alt="catering events" className='w-full md:h-[272px] rounded-t-lg' />
                    <p className='p-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam similique voluptatem nihil optio vero! Porro excepturi totam dolores, enim repellat fuga nobis blanditiis expedita quo numquam eum magnam quod dolorum</p>
                    <button className='bg-customPurple text-white p-3 mb-10 md:w-1/3 rounded-md hover:bg-customYellow cursor-pointer'>More Info</button>
                  </div>
                </div>
                <div className='m-4 p-4 md:p-0 max-w-xl'>
                    <h2 className='font-bold text-center text-xl md:text-2xl mb-4'>Cakes and Confectionaries </h2>
                  <div className='rounded-lg shadow-xl flex flex-col items-center'>
                    <img src={assets.baking1} alt="catering events" className='w-full md:h-[272px] rounded-t-lg' />
                    <p className='p-5 text-justify'>
                    - Cake and Pasteries - budget friendly adipisicing elit. Numquam similique voluptatem nihil optio vero! Porro excepturi totam dolores, enim repellat fuga nobis blanditiis expedita quo numquam eum magnam quod dolorum</p>
                    <button className='bg-customPurple text-white p-3 mb-10 md:w-1/3 rounded-md hover:bg-customYellow cursor-pointer'>More Info</button>
                  </div>
                </div>
                <div className='m-4 p-4 md:p-0 max-w-xl'>
                    <h2 className='font-bold text-center text-xl md:text-2xl mb-4'>Training</h2>
                  <div className='rounded-lg shadow-xl flex flex-col items-center'>
                    <img src={assets.training} alt="catering events" className='w-full md:h-[272px] rounded-t-lg' />
                    <p className='p-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam similique voluptatem nihil optio vero! Porro excepturi totam dolores, enim repellat fuga nobis blanditiis expedita quo numquam eum magnam quod dolorum</p>
                    <button className='bg-customPurple text-white p-3 mb-10 md:w-1/3 rounded-md hover:bg-customYellow cursor-pointer'>More Info</button>
                  </div>
                </div>
                <div className='m-4 p-4 md:p-0 max-w-xl'>
                    <h2 className='font-bold text-center text-xl md:text-2xl mb-4'>Food Delivery</h2>
                  <div className='rounded-lg shadow-xl flex flex-col items-center'>
                    <img src={assets.fooddelivery} alt="catering events" className='w-full md:h-[272px] rounded-t-lg' />
                    <p className='p-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam similique voluptatem nihil optio vero! Porro excepturi totam dolores, enim repellat fuga nobis blanditiis expedita quo numquam eum magnam quod dolorum</p>
                    <button className='bg-customPurple text-white p-3 mb-10 md:w-1/3 rounded-md hover:bg-customYellow cursor-pointer'>More Info</button>
                  </div>
                </div>
                <div className='m-4 p-4 md:p-0 max-w-xl'>
                    <h2 className='font-bold text-center text-xl md:text-2xl mb-4'>MockTails and Cocktails</h2>
                  <div className='rounded-lg shadow-xl flex flex-col items-center'>
                    <img src={assets.cocktails1} alt="catering events" className='w-full md:h-[272px] rounded-t-lg' />
                    <p className='p-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam similique voluptatem nihil optio vero! Porro excepturi totam dolores, enim repellat fuga nobis blanditiis expedita quo numquam eum magnam quod dolorum</p>
                    <button className='bg-customPurple text-white p-3 mb-10 md:w-1/3 rounded-md hover:bg-customYellow cursor-pointer'>More Info</button>
                  </div>
                </div>
            </article>
        </section>      
    </div>
  )
}

export default Services
