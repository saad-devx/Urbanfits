import React from 'react'

export const InputSelect = (props) => {
  return (
    <div className='flex flex-col' >

    <label className='font_futura text-[14px] leading-[17px]  font-semibold ' >
         {props.label || "Label" }  
         <span className='font_futura_light text-[12px] leading-[17px]' > {props?.postlabel} </span> 
         
 </label>
        
    <select  className={`  ${props.width || "w-[100px]"}  mt-[16px] h-[44px] px-[10px] py-[13.5px] border-[1px] rounded-lg outline-none  bg-transparent `}
        placeholder={` ${props.placeholder || "placeholder" } `}
     >
        {props.options?.map((opt, index)=>(

            <option value={opt[index]} > {opt} </option>

        ))}
     </select>

    </div>
  )
}
