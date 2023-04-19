import React, { useState } from 'react'
// This accordian is for Size Guide tables
export default function SizeTableAccordian(props) {
    const [open, setOpen] = useState(false)
    const toggleAccordian = () => {
        if (!open) return setOpen(true)
        if (open) return setOpen(false)
    }

    const [unit, setUnit] = useState('CM')
    const changeSize = e => setUnit(e.target.name)
    const TableRow = (array, indexColWidth, restColsWidth, dataIndex, dataLength) => {
        const sizeVal = (size) => {
            if (unit === 'CM') return size.CM
            if (unit === 'INCH') return size.INCH
        }
        if (typeof (array[1]) === 'object') return array.map((size, index) => {
            return <span key={index} className={`${index == 0 ? `${indexColWidth} sticky left-0 bg-gray-50 xl:bg-inherit pl-2 font_gotham_medium text-left` : `${restColsWidth} font_urbanist text-[10px]`} ${index == 0 && dataIndex === dataLength - 1 ? 'rounded-bl-md' : null} ${dataIndex === dataLength - 1 ? null : 'border-b'} py-3 text-black`}>{index === 0 ? size : sizeVal(size)}</span>
        })
        else return array.map((size, index) => {
            return <span key={index} className={`${index == 0 ? `${indexColWidth} sticky left-0 bg-gray-50 xl:bg-inherit pl-2 font_gotham_medium text-left` : restColsWidth} ${index == 0 && dataIndex === dataLength - 1 ? 'rounded-bl-md' : null} ${dataIndex === dataLength - 1 ? null : 'border-b'} py-3 text-black`}>{size}</span>
        })
    }
    return (
        <div className="p-4 lg:p-6 pb-0 lg:pb-0 outline-none accordion-section rounded-xl bg-gray-50 mb-6" tabIndex={1}>
            <div className={`${open ? 'border-b' : null} flex justify-between items-center transition ease duration-700 delay-300 relative`}>
                <div className="w-full pb-4 lg:pb-6 relative flex justify-between items-start transition ease duration-700 overflow-hidden">
                    <p onClick={toggleAccordian} className={`${open ? 'w-70pr lg:w-4/5' : 'w-full'} cursor-pointer sm:font_gotham lg:font_gotham_medium text-xs md:text-sm text-black tracking-widest w-3/4 text-left transition-all duration-300`}>{props.title}</p>
                    <div className={`${props.unitBtns === null ? 'hidden' : null} ${open ? 'right-0' : '-right-32'} top-0 absolute z-30 w-20 md:w-24 mr-2 flex rounded-md font_gotham text-[10px] lg:text-xs overflow-hidden transition-all duration-150`}>
                        <button onClick={changeSize} name='CM' className={`w-1/2 py-1 lg:py-2 text-center transition-all duration-700 ${unit === 'CM' ? 'bg-gold text-white' : 'bg-slate-100 text-black'}`}>CM</button>
                        <button onClick={changeSize} name='INCH' className={`w-1/2 py-1 lg:py-2 text-center transition-all duration-700 ${unit === 'INCH' ? 'bg-gold text-white' : 'bg-slate-100 text-black'}`}>INCH</button>
                    </div>
                </div>
                <i onClick={toggleAccordian} className={`${open ? '-rotate-180' : null} mb-4 lg:mb-6 fa-solid fa-caret-down transform transition ease duration-500`}></i>
            </div>
            <div className={` ${open ? 'max-h-screen mt-5' : 'max-h-0'} relative max-w-full text-sm leading-5 rounded overflow-y-hidden scrollbar_x ease duration-700`}>
                <div id='Accordian_Container' className="flex items-center mb-3">
                    <div className='xl:w-full font_gotham_light text-sm text-black'>
                        <section className="max-w-[2000px] rounded-md xl:w-full flex flex-col justify-center bg-gray-50">
                            <div className="flex text-xs text-center font_gotham_bold">
                                <span className={`${props.indexColWidth} sticky left-0 bg-gray-50 xl:bg-inherit pl-2 pt-4 lg:pt-3 rounded-tl-md border-b pr-4 py-3 text-left text-black tracking-expand`}>{props.tableHeading}</span>
                                {props.columnHeadings.map(size => {
                                    return <span className={`${props.restColsWidth} border-b pt-4 lg:pt-3 py-3 text-black font_gotham_bold`}>{size}</span>
                                })}
                            </div>
                            <div className="flex flex-col">
                                {props.rowsData.map((row, i, array) => {
                                    return <div key={i} className="flex text-center text-xs font_gotham">
                                        {TableRow(row, props.indexColWidth, props.restColsWidth, i, array.length)}
                                    </div>
                                })}
                            </div>
                        </section>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}