import React from 'react'

const FloatingImageContentBlock =() =>{
  return(
  <section className='container mx-auto py-10 flex flex-cols md:flex-row items-center'>
    <div className='md:w-1/2 md:pr-10'>
    <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Burger</h2>
    <p className='text-white mb-4 '>Experince the juciest burger's in town</p>
    <button className='bg-green-700 text-white px-4  py-2 rounded hover:border-green-600 transition duration-200'>Order Now!
    </button>
    <h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-white'>Coming soon: Our New Burger's launches </h3>
   <ul>
    <li><strong>cheesy bacon burger:</strong>
soft and mouthwatering.
    </li>
    <li><strong>Double Decker burger:</strong>
 Double patty burger with our signature sauce's.
    </li>
    <li><strong>Cheesy Creamy mushroom burger:</strong>
    meaty ,cheesy mith signature mushroom sauce.
    </li>
    <br/>
   </ul>
</div>
<div className='md-1/2 mt-6 md:mt-0'>
<img src='https://img.freepik.com/free-vector/restaurant-mural-wallpaper-concept_23-2148671800.jpg?ga=GA1.2.2082299742.1716266388&semt=ais_hybrid' 
alt='Delicious Burger'
className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/>

</div>



  

  </section>
  )
}
export default FloatingImageContentBlock
