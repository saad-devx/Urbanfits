import React from 'react'

export const InputSelect = (props) => {
  return (
    <div className='flex flex-col' >

      <label className='font_futura text-[14px]   font-[400] flex items-center ' >
        <span> {props?.label} </span>
        <span className={`font_futura_light text-[12px] leading-[17px] text-[${props.postlabelcolor || "#E4E4E4"}]  ml-[5px] `} > {props?.postlabel} </span>
      </label>

      <select {...props} className={`${props.width || null} ${props.label ? "mt-3" : "mt-0"} ${props.height || "h-11"} px-2 border ${props.rounded || "rounded-lg"} outline-none ${props.bg || "bg-transparent"}`}>
        {props.children}
      </select>

    </div>
  )
}
