import React, { useState } from 'react'
import CutomerServices from '../index'
import Accordian from '@/components/accordians/accordian'

export default function Women() {
    const [unit, setUnit] = useState('CM')
    const changeSize = (e) => {
        let name = e.target.name
        setUnit(name)
    }
    
    const TableRow = (array, isObjArray = false) =>{
        const sizeVal = (size) => {
            if (unit === 'CM') return size.CM
            if (unit === 'INCH') return size.INCH
        }
        if(isObjArray) return array.map((size, index)=>{
            return <span key={index} className={`${index==0?'w-32 font_gotham_medium text-left':'w-15 2xl:w-20 text-[10px]'} border-b py-3 text-black`}>{index===0?size:sizeVal(size)}</span>
        })
        else return array.map((size, index)=>{
            return <span key={index} className={`${index==0?'w-32 font_gotham_medium text-left':'w-15 2xl:w-20'} border-b py-3 text-black`}>{size}</span>
        })
    }
    return (
        <CutomerServices>
            <Accordian title='COATS, JACKETS, BLAZERS'>
                <div className="flex justify-start">
                    <div className="flex w-24 rounded-md font_gotham text-xs overflow-hidden">
                        <button onClick={changeSize} name='CM' className={`w-1/2 py-2 text-center transition-all duration-700 ${unit === 'CM' ? 'bg-gold text-white' : 'bg-slate-200 text-black'}`}>CM</button>
                        <button onClick={changeSize} name='INCH' className={`w-1/2 py-2 text-center transition-all duration-700 ${unit === 'INCH' ? 'bg-gold text-white' : 'bg-slate-200 text-black'}`}>INCH</button>
                    </div>
                </div>
                <section className="mt-5 flex flex-col justify-center">
                    <div className="flex text-xs text-center font_gotham_bold">
                        <span className="w-32 border-b pr-4 py-3 text-left text-black tracking-expand">URBAN FITS</span>
                        {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL', '7XL'].map(size => {
                            return <span className="w-15 2xl:w-20 border-b py-3 text-black font_gotham_bold">{size}</span>
                        })}
                    </div>
                    <div className="max-w-[2000px] flex flex-col">
                        <div className="flex text-center text-xs font_gotham">
                            {TableRow(['UK/IE Size', 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26])}
                        </div>
                        <div className="flex text-center text-xs font_gotham">
                            {TableRow(['US Size', 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22])}
                        </div>
                        <div className="flex text-center text-xs font_gotham">
                            {TableRow(['EU Size', 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54])}
                        </div>
                        <div className="flex text-center text-xs font_gotham">
                            {TableRow(['FR Size', 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56])}
                        </div>
                        <div className="flex text-center text-xs font_gotham">
                            {TableRow(['IT Size', 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60])}
                        </div>
                        <div className="flex text-center text-xs font_gotham">
                            {TableRow(['Sleeve', {CM: '77.8- 78.3', INCH: '30⅗ - 30⅘'}, {CM: '78.3- 78.8', INCH: '30⅘ - 31'}, {CM: '78.8- 79.3', INCH: '31 - 31⅕'}, {CM: '79.3- 79.8', INCH: '31⅕ - 31⅖'}, {CM: '79.8- 80.3', INCH: '31⅖ - 31⅗'}, {CM: '80.3- 80.8', INCH: '31⅗ - 31⅘'}, {CM: '80.8- 81.3', INCH: '31⅘ - 32'}, {CM: '81.3- 81.8', INCH: '32 - 32⅕'}, {CM: '81.8- 82.2', INCH: '32⅕ - 32⅖'}, {CM: '82.2- 82.8', INCH: '32⅖ - 32⅗'}, {CM: '82.8- 83.2', INCH: '32⅗ - 32⅘'}, {CM: '83.5- 84.5', INCH: '32⅞ - 33⅓'}], true)}
                        </div>
                        <div className="flex text-center text-xs font_gotham">
                            {TableRow(['Chest', {CM: '76.5- 80.5', INCH: '30⅛ - 31⅔'}, {CM: '80.5- 84.5', INCH: '31⅔ - 33⅓'}, {CM: '78.8- 79.3', INCH: '33⅓ - 34⅘'}, {CM: '88.5-92.5', INCH: '34⅘ - 36⅖'}, {CM: '92.5- 96.5', INCH: '36⅖ - 38'}, {CM: '96.5- 101.5', INCH: '38 - 40'}, {CM: '101.5- 106.5', INCH: '40 - 41⅞'}, {CM: '06.5- 112', INCH: '41⅞ - 44⅛'}, {CM: '113 - 118', INCH: '44½ - 46½'}, {CM: '118 - 123', INCH: '46½ - 48⅖'}, {CM: '123 - 128', INCH: '48⅖ - 50⅖'}, {CM: '128 - 134', INCH: '50⅖ - 52⅘'}], true)}
                        </div>
                        <div className="flex text-center text-xs font_gotham">
                            {TableRow(['Waist', {CM: '60- 64', INCH: '30⅛ - 31⅔'}, {CM: '64- 68', INCH: '31⅔ - 33⅓'}, {CM: '68- 72', INCH: '33⅓ - 34⅘'}, {CM: '72- 76', INCH: '34⅘ - 36⅖'}, {CM: '76- 81', INCH: '36⅖ - 38'}, {CM: '81- 86', INCH: '38 - 40'}, {CM: '86- 91', INCH: '40 - 41⅞'}, {CM: '91- 96', INCH: '41⅞ - 44⅛'}, {CM: '97 - 102', INCH: '44½ - 46½'}, {CM: '102 - 107', INCH: '46½ - 48⅖'}, {CM: '107 - 112', INCH: '48⅖ - 50⅖'}, {CM: '112 - 118', INCH: '50⅖ - 52⅘'}], true)}
                        </div>
                        <div className="flex text-center text-xs font_gotham">
                            {TableRow(['Hips', {CM: '85- 89', INCH: '33½ - 35'}, {CM: '89- 93', INCH: '35 - 36⅗'}, {CM: '93- 97', INCH: '36⅗ - 38⅕'}, {CM: '97- 101', INCH: '38⅕ - 39⅘'}, {CM: '101- 105', INCH: '39⅘ - 41⅓'}, {CM: '105- 110', INCH: '41⅓ - 43⅓'}, {CM: '110- 115', INCH: '43⅓ - 45⅓'}, {CM: '115- 120', INCH: '45⅓ - 47⅕'}, {CM: '121 - 126', INCH: '47⅗ - 49⅗'}, {CM: '126 - 131', INCH: '49⅗ - 51⅗'}, {CM: '131 - 136', INCH: '51⅗ - 53½'}, {CM: '136 - 141', INCH: '53½ - 55½'}], true)}
                        </div>
                    </div>
                </section>
            </Accordian>
        </CutomerServices>
    )
}
