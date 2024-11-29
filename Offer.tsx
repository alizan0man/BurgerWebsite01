'use client'
import React from 'react'

type Offer = {
  title: string;
  discription :string;
}
  const SpecialOffers: React.FC = () =>{
    const offers : Offer [] =[
      {
        title: 'Happy Hours',
        discription :'Avail 50% discount at all our singnature drinks'
      },

      {
        title: 'Family Deals',
        discription :'Buy 2 main course and avail 50% discount at family deals'
      },

      {
        title: 'Weekend deals',
        discription :'Buy 3 main course and get 1 meal free'
      },
    ];
    const handleOfferClick =(description : string ) =>{
      alert(description);
    }


    return(
      <section className='py-10'>
<div className='container mx-auto text-center'>
  <h2 className='text-4xl font-bold mb-6 text-white'>Special Offer's</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'></div>
  {offers.map((offer,index)=>(
  <button key={index}
  onClick={()=>handleOfferClick(offer.discription)}
  className=' bg-white shadow-lg rounded-lg text-center hover:bg-grey-300 transition duration-300 transfrom hover:scale-105 '>
<h3 className='text-2xl font-semibold text-red-700 '>{offer.title}</h3>
<p className='text-slate-700 mt-3-'>{offer.discription}</p>
  </button>
  ))}

</div>
      </section>

    )
    

  }


export default SpecialOffers