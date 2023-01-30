import React from 'react'
import Link from 'next/link'

export default function Button(props) {

  return (
    <Link href={`${props.href?props.href:'#'}`} id={props.value} name={props.name?props.name:''} onClick={props.onclick?props.onclick:null} type={props.type?props.type:''} className={`${props.classes} flex justify-center items-center h-11 ${props.bg?props.bg:"bg_btn_gold"} ${props.my?props.my:"my-6"} py-2 rounded-full text-${props.text?props.text: "white"} text-center text-sm md:text-base transition hover:shadow-xl ${props.disabled===true? "opacity-60 pointer-events-none" : ''} `} >
      {props.value}
    </Link>
  )
}
