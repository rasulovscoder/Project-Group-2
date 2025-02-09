import React from 'react'
import simg1 from './images/simg1.png'
import simg2 from './images/simg2.png'

const Service = () => {
  return (
    <div className='w-[1440px] h-[4644px] bg-white m-auto'>





<div className='w-[1440px] h-[113px] text-center bg-white'>
      <h1 className='text-[20px] text-black '>Home/About us</h1>
      <h1 className='text-[40px] text-black font-bold'>Who We are</h1>
    </div>
  <img src={simg1} className='w-[1440px] h-[490px] bg-white' />

<div className='w-[1440px] h-[780px] bg-white mt-28'>
  <div className='flex flex-wrap'>
    <button className='btn btn-error w-[70px] h-[70px] rounded-full text-white text-[20px] ml-[40px]'>--</button>
<h1 className='text-[30px] text-black font-bold mt-[8px] ml-[15px]'>Pick the car</h1>
  </div>

<div className='flex flex-wrap'>
<img src={simg2} className="w-[900px] h-[600px] mt-[80px] p-10" />
<div className='w-[444px] h-[713px] p-10 mt-[80px]'>
  <h1 className='text-[20px] text-black font-bold'>Our Journey</h1>
  <h1 className='text-[56px] text-black font-bold'>Pioneering Premium Car Rentals</h1>
  <p>Drivoxe embarked on a remarkable journey over a decade ago, driven by a relentless passion for redefining the travel experience. From the outset, our mission was clear: to provide the finest vehicles and exceptional service to make every journey unforgettable. We've upheld our commitment to delivering quality and variety, offering a diverse range of meticulously maintained vehicles to ensure you always drive in style.</p>
</div>
</div>



</div>















    </div>
  )
}

export default Service