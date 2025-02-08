import React, { useState } from 'react'
import rasm1 from "./img/rasm2.png"

const Details = () => {

    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


return (
    <div>
        <div className='w-[1440px] h-[810px] '>
            <div className='flex flex-row'>
                <img src={rasm1} className='w-[774px] h-[549px] ' />
                <div>
                    <h1 className='text-[56px] font-[700]'>Vanguard CX2
                        <br />
                        Convertible</h1>
                    <br />
                    <h2 className='text-[20px] font-[600] text-[#BABABA] '>Starting at</h2>
                    <h1 className='font-[500] text-[45px] '>$59/day</h1>
                    <br />
                    <p className='font-[500] text-[18px] text-[#BABABA] '>Elevate your journey with the Ford Mustang Convertible, the epitome of American muscle and open-air excitement. Feel the wind in your hair as you experience the power, style, and iconic allure of this classic masterpiece. Cruise with confidence, top down.</p>
                    <br /><br />
                    <div className='flex flex-row gap-[25px]'>
                        <button onClick={decrement} className=' w-[32px] h-[32px] rounded-[50%] border-[1px] border-gray-950  flex justify-center items-center duration-200 hover:bg-gray-200 mt-[-5px] text-[40px]'>-</button>
                        <h6>{count}</h6>
                        <button onClick={increment} className=' w-[32px] h-[32px] rounded-[50%] border-[1px] border-gray-950  flex justify-center items-center duration-200 hover:bg-gray-200 mt-[-5px] text-[30px]'>+</button>                        <button className='bg-[#FD3B3B] w-[143px] h-[40px] items-center rounded-[32px] text-[#FFFFFF] text-[16px] duration-200 font-[700] hover:bg-[#ce4f4f] shadow-xl ' >Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

)
}


export default Details