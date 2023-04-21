import React from 'react'
import LinkBtn from '../buttons/link_btn'


const CardAdmin = (props)=> {
  return (
    <div className={`${props.classes} ${props.round? props.round: "rounded-[2rem]" } bg-white card_boxshadow flex flex-col hover:rounded-2xl hover:scale-[1.01] transition-all duration-300 space-y-8`}>
        {props.children}
    </div>
  )
}

export default CardAdmin