import React from 'react'
import Image from 'next/image'
import LinkBtn from '../link_btn'

export default function SuggestionCard(props) {
    return (
        <div className='relative w-full h-[45vh] md:w-3/5 md:h-[40vh] lg:w-[32%] lg:h-[60vh] rounded-3xl font_futuraLT overflow-hidden' >
            <Image width={640} height={853} src={props.img} className={`w-full h-full object-cover ${!props.object_fit ? "object-center" : props.object_fit}`} alt='' ></Image>
            <div className="absolute w-full bottom-0 left-0 p-3 lg:p-6 text-white flex flex-col items-start text-5xl">
                <h3 className="text-2xl lg:text-3xl mt-1 mb-4">{props.title}</h3>
                <LinkBtn href={props.href} my="my-0" bg="bg-white" classes="w-1/2 md:w-1/3 lg:w-1/2">{props.btnValue}</LinkBtn>
            </div>
        </div>
    )
}
