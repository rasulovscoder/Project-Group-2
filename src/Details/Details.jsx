import React from 'react'
import rasm1 from "./img/rasm2.png"

const Details = () => {
  return (
    <div>
        <div className='w-[1440px] h-[810px] '>
            <div>
                <img src={rasm1} className='w-[774px] h-[549px] ' />
                <div>
                    <h1 className='text-[56px] font-[700]'>Vanguard CX2
                        <br />
                    Convertible</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details