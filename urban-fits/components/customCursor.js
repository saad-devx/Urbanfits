import React, { useEffect, useState } from 'react'

export function throttle(func, delay) {
    let timeoutId;
    let shouldExecute = true;

    return function (...args) {
        if (!shouldExecute) return;

        shouldExecute = false;

        func.apply(this, args);

        timeoutId = setTimeout(() => {
            shouldExecute = true;
        }, delay);
    };
}
export default function CustomCursor() {
    if (window.matchMedia('(max-width: 1024px)').matches) return
    const [position, setPosition] = useState({ x: "50%", y: "50%" });
    useEffect(() => {
        const handleMouseMove = throttle((e) => {
            setPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });
        }, 50);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return <div style={{ left: `${position.x}`, top: `${position.y}`, willChange: "transform" }} className='fixed z-[999] left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-15 h-[60px] rounded-full bg-transparent backdrop-invert transition-all duration-500 ease-out select-none pointer-events-none' ></div>
}
