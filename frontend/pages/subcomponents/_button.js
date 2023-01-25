import React from 'react'

export default function Button (props) {
  return (
    <button id={props.value} type={props.type} className={`${props.classes} h-11 bg_btn_gold my-6 py-2 rounded-full text-white transition hover:shadow-xl`}>{props.value}</button>
  )
}
