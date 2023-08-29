import React, { useState, useEffect } from 'react'
import toTopBtn from '@/styles/scroll-top&logo-load.module.css'

export default function ToTopBtn() {
    const [upBtn, setUpBtn] = useState(false)

    useEffect(() => {
        const getPos = () => {
            const position = window.pageYOffset;
            if (position >= 299) setUpBtn(true)
            if (position < 299) setUpBtn(false)
        }
        window.addEventListener("scroll", getPos)
    }, [upBtn])
    if (window.matchMedia('(min-width: 1024px)').matches) return (
        <div className={`fixed z-20 right-10 bottom-10 transition-all duration-300 ${!upBtn ? 'opacity-0 pointer-events-none translate-y-7' : ''}`}>
            <button onClick={() => { scrollTo(0, 0) }} className={`${toTopBtn.button_cover} border-2 border-black hover:border-0 transition-all rounded-full shadow-md`} role="button">
                <span className="text font_gotham_medium text-[10px]">GO UP</span><span className="fa-solid fa-chevron-up text-white" />
            </button>
        </div>
    )
    else return null
}
