import React from 'react'
import Button from './_button'

export default function Card(props) {
  return (
    <div className={`${props.sizeClasses} py-20 rounded-[2.5rem] bg-white card_boxshadow flex flex-col justify-center items-center hover:-translate-y-3 transition duration-500 space-y-8`}>
      <h1 className="font_futuraLT text-xl md:text-2xl">e-Gift Cards</h1>
      <h3 className=" h-1/3 md:h-12 font_futuraLT mx-[15%] text-sm text-center">{props.value}</h3>
      <Button classes=' w-2/4 md:w-2/5' value='Shop Gift Card' />
    </div>
  )
}
