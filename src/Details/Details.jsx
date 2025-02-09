import React, { useState } from 'react'
import rasm1 from "./img/rasm2.png"
import rasm2 from "./img/rasm1.jpg"
import rasm3 from "./img/rasm3.png"
import rasm4 from "./img/rasm4.png"
import rasm5 from "./img/rasm5.png"
import rasm6 from "./img/Vector.png"
import rasm7 from "./img/Vector1.png"
import rasm8 from "./img/Vector2.png"
import rasm9 from "./img/Vector3.png"
import rasm10 from "./img/Shape.png"




const Details = () => {

    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


    return (
        <div>
            <div className='w-[1440px] h-[810px] '>
                <div className=' w-full h-[317px] bg-center bg-no-repeat bg-cover bg-[url(./img/rasm1.jpg)]'>

                </div>
                <div className='flex flex-row'>
                    <div>
                    <img src={rasm1} className='w-[774px] h-[549px] ' />
                        <div className='w-[774px] h-[240px] flex justify-between'>
                            <img src={rasm3} className="w-[240px] h-[240px]"  />
                            <img src={rasm4} className="w-[240px] h-[240px]"  />
                            <img src={rasm5} className="w-[240px] h-[240px]"  />
                        </div>
                    </div>
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
                        <div className='w-[320px] h-[140px]  '>
                        <h1 className='text-[16px] font-[600]'>SPECIFICATIONS</h1>
                        <div className='mt-[10px]'>
                            <div className='flex flex-col w-[134px] h-[96px] justify-center items-start'>
                                <div className='flex flex-row gap-[10px]'>
                                    <img src={rasm6} className="w-[23px] h-[15px]  " />
                                    <h6 className='text-[18px] font-[500] '>Convertible</h6>
                                </div>
                                <div className='flex flex-row gap-[10px] justify-center items-start'>
                                    <img src={rasm8} className="w-[23px] h-[15px]  " />
                                    <h6 className='text-[18px] font-[500] '>5.0-liter V8</h6>
                                </div>
                                <div className='flex flex-row gap-[10px] justify-center items-start'>
                                    <img src={rasm10} className="w-[23px] h-[15px]  " />
                                    <h6 className='text-[18px] font-[500] '>450 HP</h6>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}


export default Details