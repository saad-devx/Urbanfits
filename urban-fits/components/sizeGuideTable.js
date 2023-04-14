import React, { useState, useEffect } from 'react'

export default function GuideTable(props) {
    const [unit, setUnit] = useState('CM')
    const changeSize = e => setUnit(e.target.name)
    const TableRow = (array, indexColWidth, restColsWidth, dataIndex, dataLength) => {
        const sizeVal = (size) => {
            if (unit === 'CM') return size.CM
            if (unit === 'INCH') return size.INCH
        }
        if (typeof (array[1]) === 'object') return array.map((size, index) => {
            return <span key={index} className={`${index == 0 ? `${indexColWidth} sticky left-0 bg-gray-100 xl:bg-inherit pl-2 font_gotham_medium text-left` : `${restColsWidth} font_urbanist text-[10px]`} ${index == 0 && dataIndex === dataLength-1 ? 'rounded-bl-md' : null} ${dataIndex === dataLength-1?null:'border-b'} py-3 text-black`}>{index === 0 ? size : sizeVal(size)}</span>
        })
        else return array.map((size, index) => {
            return <span key={index} className={`${index == 0 ? `${indexColWidth} sticky left-0 bg-gray-100 xl:bg-inherit pl-2 font_gotham_medium text-left` : restColsWidth} ${index == 0 && dataIndex === dataLength-1 ? 'rounded-bl-md' : null} ${dataIndex === dataLength-1?null:'border-b'} py-3 text-black`}>{size}</span>
        })
    }
    const [unitBtnPos, setUnitBtnPos] = useState('0')
    useEffect(() => {
        let containerWidth = document.querySelector('#Accordian_Container').offsetWidth
        setUnitBtnPos(containerWidth - 96)
    }, [])
    return <>
        <div style={{left: `${unitBtnPos}px`}} className={`${props.unitBtns===null?'hidden':null} w-24 sticky top-0 xl:left-full`}>
            <div className="flex w-full rounded-md font_gotham text-[10px] lg:text-xs overflow-hidden">
                <button onClick={changeSize} name='CM' className={`w-1/2 py-1 lg:py-2 text-center transition-all duration-700 ${unit === 'CM' ? 'bg-gold text-white' : 'bg-slate-100 text-black'}`}>CM</button>
                <button onClick={changeSize} name='INCH' className={`w-1/2 py-1 lg:py-2 text-center transition-all duration-700 ${unit === 'INCH' ? 'bg-gold text-white' : 'bg-slate-100 text-black'}`}>INCH</button>
            </div>
        </div>
        <section className="max-w-[2000px] rounded-md xl:w-full mt-5 flex flex-col justify-center bg-gray-50">
            <div className="flex text-xs text-center font_gotham_bold">
                <span className={`${props.indexColWidth} sticky left-0 bg-gray-100 xl:bg-inherit pl-2 pt-4 lg:pt-3 rounded-tl-md border-b pr-4 py-3 text-left text-black tracking-expand`}>{props.heading}</span>
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
    </>
}