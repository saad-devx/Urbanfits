import React from 'react'

export default function GenderSelect({ user, show, setGenderModal }) {
    return <section style={{ transform: show ? "translateX(-100%)" : "translateX(0)" }} className='fixed z-50 top-0 -right-full w-screen h-screen bg-white flex flex-col transition-all duration-500'>
        <div className="w-full p-4 border-b border-gray-50 flex justify-between items-center">
            <button onClick={() => setGenderModal(false)} className='fa-solid fa-chevron-left text-xl'></button>
            <div className="flex flex-col justify-center items-center font_urbanist text-xs text-gray-400">
                <h1 className="font_urbanist_medium text-lg">Gender</h1>
                All data will be encrypted
            </div>
            <i className='w-0 h-0' />
        </div>
        <div className="w-full px-4 flex flex-col">
            <button className="w-full py-4 flex justify-between items-center border-b border-gray-50 font_urbanist text-base">
                Male
                {user.gender.toLowerCase() === "male" ? <i className="fa-solid fa-check text-black text-lg z-50" /> : null}
            </button>
            <button className="w-full py-4 flex justify-between items-center border-b border-gray-50 font_urbanist text-base">
                Female
                {user.gender.toLowerCase() === "female" ? <i className="fa-solid fa-check text-black text-lg z-50" /> : null}
            </button>
            <button className="w-full py-4 flex justify-between items-center border-b border-gray-50 font_urbanist text-base">
                Other
                {user.gender.toLowerCase() === "other" ? <i className="fa-solid fa-check text-black text-lg z-50" /> : null}
            </button>
        </div>
    </section>
}