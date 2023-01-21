import React from 'react'
import Button from './_button'

export default function Card(props) {
  return (
    <div className={`${props.sizeClasses} py-20 rounded-[2.5rem] bg-white card_boxshadow flex flex-col justify-center items-center space-y-8`}>
        <h1 className="font_futuraLT text-2xl">e-Gift Cards</h1>
        <h3 className=" font_futuraLT mx-[15%] text-sm text-center">Add a personalized messgae, we deliver your gift via emial.</h3>
        <Button classes='w-2/5' value='Shop Gift Card' />
    </div>
  )
}
