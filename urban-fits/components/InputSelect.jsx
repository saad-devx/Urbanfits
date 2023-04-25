import React from 'react'

export const InputSelect = (props) => {
  return (
    <div className='flex flex-col' >

    <label className='font_futura text-[14px] leading-[17-px]  font-semibold ' >
         {props.label || "Label" } </label>
        
    <select  className={`  ${props.width || "w-[100px]"}  mt-[12px] h-[44px] px-[10px] py-[13.5px] border-[1px] rounded-lg outline-none  `}
        placeholder={` ${props.placeholder || "placeholder" } `}
     >
        {props.options?.map((opt, index)=>(

            <option value={opt[index]} > {opt} </option>

        ))}
     </select>

    </div>
  )
}
