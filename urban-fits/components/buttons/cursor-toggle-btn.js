import React from 'react'
import styles from "@/styles/scroll-top&cursor-btn.module.css"
import { useCursor } from '@/hooks/useCursor'

export default function CursorToggleBtn() {
    const {toggleCursor, cursor} = useCursor()
    if (window.matchMedia('(max-width: 1024px)').matches) return
    return (
        <div className="h-10 flex justify-center items-center">
            <span className="text-sm font_gotham_medium tracking-vast">CURSOR</span>
            <input id="toggle" onChange={toggleCursor} type="checkbox" defaultChecked={true} className={styles.cursor_toggle} />
            <label for="toggle" className={`${styles.toggleWrapper} mx-2`}>
                <div className={styles.cursor_toggle_circle}></div>
            </label>
            <span className="text-sm font_gotham_medium tracking-vast">{cursor? "ON": "OFF"}</span>
        </div>
    )
}
