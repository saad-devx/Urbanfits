import React from 'react'
import Link from 'next/link'

export default function Button(props) {

  return (
    <Link id={props.value} href={`${props.href}`} className={`${props.classes} flex justify-center items-center h-11 ${props.bg?props.bg:"bg_btn_gold"} my-6 py-2 rounded-full text-white text-center text-sm md:text-base transition hover:shadow-xl ${props.disabled ? "opacity-60 pointer-events-none" : ''} `} >
      {props.value}
    </Link>
  )
}
