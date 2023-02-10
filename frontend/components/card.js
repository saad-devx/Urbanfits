import React from 'react'
import LinkBtn from './link_btn'


const Card = (props)=> {
  return (
    <div className={`${props.classes} ${props.round? props.round: "rounded-[2rem]" } bg-white card_boxshadow flex flex-col hover:rounded-2xl hover:scale-[1.01] transition-all duration-500 space-y-8`}>
      <h2 className="font_futuraLT text-xl md:text-2xl">{props.title}</h2>
      <p className={` ${props.valueCenter?'text-center':''} h-1/3 w-3/4 md:h-12 font_futuraLT text-sm`}>{props.value}</p>
      <LinkBtn href={props.href? props.href:"#"} classes={props.btnClasses?props.btnClasses:'w-2/4 md:w-2/5'} >{props.btnValue}</LinkBtn>
    </div>
  )
}

export default Card