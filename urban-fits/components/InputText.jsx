import React from 'react'

export const InputText = (props) => {



  return (
    <div className='flex flex-col' >
      
    <label className='font_futura text-[14px] leading-[17-px]  font-semibold flex items-center ' >
         <span> {props?.label } </span>
         <span className={`font_futura_light text-[12px] leading-[17px]  text-[${props.postlabelcolor||"#E4E4E4" }]  ml-[5px] `} > {props?.postlabel} </span> 
         </label>
         
    <input value={props?.value} name={props?.name} onChange={props?.onChange} onKeyUp={props.onKeyUp} 
     className={`  ${props?.width}  ${props.mt || "mt-[12px]" }  ${props.className} ${ props?.h || "h-[44px]"} px-[10px] py-[13.5px]
       ${props?.border || "border-[1px]"  }  
     ${props?.rounded || "rounded-lg" }    outline-none `}
        placeholder={` ${props.placeholder || "placeholder" } `}
    type="text"   />
  {/* <input type="text"  style={{width:"100%"}} /> */}

    </div>
  )
}

//  className={`  ${props.mt || "mt-[12px]" } h-[44px] px-[10px] py-[13.5px] border-[1px] rounded-lg outline-none `}