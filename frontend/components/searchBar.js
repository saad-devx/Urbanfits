import React from 'react'

export default function SearchBar() {
    return (
        <>
            <div className='w-full h-[5vh] bg-white lg:h-[7vh] px-5 py-2 flex justify-start items-center border border-gray-400 rounded-full' >
                <i className="material-symbols-outlined mr-4 translate-y-[1px] text-[2rem]">search</i><input type="text" className="bg-transparent outline-none border-none w-full h-full" placeholder='Type a Question here' />
            </div>
        </>
    )
}
