import React from 'react'
import Link from 'next/link'

export default function LinkBtn(props) {

  return (
    <Link href={`${props.href ? props.href : '#'}`} id={props.children} name={props.name ? props.name : ''} onClick={props.onclick ? props.onclick : null} type={props.type ? props.type : ''} className={`flex justify-center items-center h-11 ${props.bg ? props.bg : "bg_btn_gold"} ${props.my ? props.my : "my-6"} py-2 rounded-full ${props.text ? props.text : "text-white"} text-center text-sm md:text-base transition hover:shadow-xl ${props.disabled === true ? "opacity-60 pointer-events-none" : ''} ${props.classes} `} >
      {props.children}
    </Link>
  )
}
