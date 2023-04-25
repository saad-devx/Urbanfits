import React from 'react'

export const InputText = (props) => {



  return (
    <div className='flex flex-col' >

    <label className='font_futura text-[14px] leading-[17-px]  font-semibold ' >
         {props.label || "Label" } 
         <span className={`font_futura_light text-[12px] leading-[17px]  text-[${props.postlabelcolor||"#E4E4E4" }] `} > {props?.postlabel} </span> 
         </label>
        
    <input  className={` ${props.width || "w-[300px]"}  ${props.mt || "mt-[12px]" } h-[44px] px-[10px] py-[13.5px] border-[1px] rounded-lg outline-none `}
        placeholder={` ${props.placeholder || "placeholder" } `}
    type="text"   />

    </div>
  )
}
