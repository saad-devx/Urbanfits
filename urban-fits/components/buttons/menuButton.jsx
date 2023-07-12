import React, { useState } from 'react'

export default function MenuButton(props) {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }

    return <div className='w-10 relative font_futura '>
        <button onClick={toggleMenu} className="fa-solid fa-ellipsis-vertical"></button>
        <div onBlur={() => { console.log("clicked somewhere else") }} className={`absolute z-50 -left-full -bottom-full translate-y-3/4 flex flex-col items-start p-2 shadow-md gap-y-3 ${menu ? null : "opacity-0 pointer-events-none"} border rounded-xl font_futura bg-white transition-all`} >
            {props.options?.map((option, i) => {
                return <button key={i} onClick={() => { option.onClick(); toggleMenu() }} name={option.name} className="cursor-pointer text-xs">{option.name}</button>
            })}
        </div>
    </div>
}
