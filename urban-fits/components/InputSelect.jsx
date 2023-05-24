import React from 'react'

export const InputSelect = (props) => {
  return (
    <div className='flex flex-col' >

<label className='font_futura text-[14px] leading-[17-px]  font-[400] flex items-center ' >
         <span> {props?.label } </span>
         <span className={`font_futura_light text-[12px] leading-[17px]  text-[${props.postlabelcolor||"#E4E4E4" }]  ml-[5px] `} > {props?.postlabel} </span> 
         </label>
        
    <select onChange={props.onChange} className={`  
     ${props.width || " "} ${props.label? "mt-[12px]" : "mt-[0px]" } ${props.height || "h-[44px]" }  px-[8px]  border-[1px] ${props.rounded || "rounded-lg" }  outline-none 
     ${props.bg || "bg-transparent" }  `}
        placeholder={` ${props.placeholder || "placeholder" } `}
     >
        {props.options?.map((opt, index)=>(

            <option  className=''
            
            value={opt} > {opt} </option>

        ))}
     </select>

    </div>
  )
}
