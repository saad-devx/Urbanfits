import React from 'react'
import CutomerServices from '../index'
import SizeTableAccordian from '@/components/accordians/sizeTable-accordian'
import { TableButton, HelpSection } from './women'
import LinkBtn from '@/components/buttons/link_btn'
import Link from 'next/link'

export default function Men() {
    return (
        <CutomerServices>
            <h1 className="mb-6 font_gotham_bold text-sm md:text-lg xl:text-xl tracking-vast">MEN' SIZE</h1>
            <SizeTableAccordian title='TOPS, OUTERWEAR, CASUAL SHIRTS' headingTracking_null tableHeading='Urban Alpha Size' indexColWidth='w-32 md:w-1/5' restColsWidth='w-16 md:w-[13.3%]'
                columnHeadings={['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']}
                rowsData={[
                    ['UK/IE Size', 34, '36 - 38', 40, 42, 44, 46, 48],
                    ['US Size', 34, '36 - 38', 40, 42, 44, 46, 48],
                    ['EU Size', 44, '46 - 48', 50, 52, 54, 56, 58],
                    ['FR Size', '44R', '46R - 48R', '50R', '52R', '54R', '56R', '58R'],
                    ['Chest', { CM: '88 - 92', INCH: '34⅗ - 36⅕' }, { CM: '93 - 97', INCH: '36⅗ - 38⅕' }, { CM: '98 - 102', INCH: '38⅗ - 40⅕' }, { CM: '103 - 108', INCH: '40⅗ - 42½' }, { CM: '109 - 114', INCH: '42⅞ - 44⅞' }, { CM: '115 - 120', INCH: '45⅓ - 47⅕' }, { CM: '121 - 126', INCH: '47⅗ - 49⅗' }],
                    ['Waist', { CM: '78 - 82', INCH: '30⅔ - 32⅓' }, { CM: '83 - 87', INCH: '32⅔ - 34⅓' }, { CM: '88 - 92', INCH: '34⅗ - 36⅕' }, { CM: '93 - 98', INCH: '36⅗ - 38⅗' }, { CM: '99 - 104', INCH: '39 - 40⅞' }, { CM: '105 - 110', INCH: '41⅓ - 43⅓' }, { CM: '111 - 116', INCH: '43⅔ - 45⅔' }],
                    ['Arms', { CM: '84 - 85', INCH: '33⅛ - 33½' }, { CM: '86 - 87', INCH: '33⅞ - 34⅓' }, { CM: '88 - 89', INCH: '34⅗ - 35' }, { CM: '90 - 91', INCH: '35⅖ - 35⅘' }, { CM: '92 - 93', INCH: '36⅕ - 36⅗' }, { CM: '94 - 95', INCH: '37 - 37⅖' }, { CM: '96 - 97', INCH: '37⅘ - 38⅕' }],
                    ['Necks', { CM: '37 - 38', INCH: '14⅗ - 15' }, { CM: '38 - 39', INCH: '15 - 15⅖' }, { CM: '40 - 41', INCH: '15⅔ - 16⅛' }, { CM: '42 - 43', INCH: '16½ - 16⅞' }, { CM: '44 - 45', INCH: '17⅓ - 17⅔' }, { CM: '45 - 46', INCH: '17⅔ - 18⅛' }, { CM: '46 - 47', INCH: '18⅛ - 18½' }]
                ]}>
                <div className="hidden md:flex sticky left-0 gap-4">
                    <LinkBtn href='product/t-shirts' bg='bg-gold' font='font_gotham_medium' fontSize='text-xs' classes='w-36' >SHOP T-SHIRTS</LinkBtn>
                    <LinkBtn href='product/shirts' bg='bg-gold' font='font_gotham_medium' fontSize='text-xs' classes='w-36' >SHOP SHIRTS</LinkBtn>
                </div>
                <div className="md:hidden btn_width my-4 sticky left-0 flex justify-between">
                    <div className='w-[45%] h-[38px] p-[1px] bg-gold rounded-md' >
                        <Link href='product/t-shirts' >
                            <div className='w-full h-full bg-white rounded-[5px] flex justify-center items-center font_gotham_medium text-[10px] tracking-vast' >SHOP T-SHIRTS</div>
                        </Link>
                    </div>
                    <div className='w-[45%] h-[38px] p-[1px] bg-gold rounded-md' >
                        <Link href='product/t-shirts' >
                            <div className='w-full h-full bg-white rounded-[5px] flex justify-center items-center font_gotham_medium text-[10px] tracking-vast' >SHOP SHIRTS</div>
                        </Link>
                    </div>
                </div>
            </SizeTableAccordian>
            <SizeTableAccordian title='URBAN MENSWEAR AND TH SPORTS - BOTTOMS - DENIM - CHINO - SHORTS' headingTracking_null tableHeading='Urban Alpha Size' indexColWidth='w-32 md:w-1/5' restColsWidth='w-16 md:w-[13.3%]'
                columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']}
                rowsData={[
                    ['UK/IE Size', 32, 34, '36 - 38', 40, 42, 44, 46],
                    ['US Size', 32, 34, '36 - 38', 40, 42, 44, 46],
                    ['EU Size', 42, 44, '46 - 48', 50, 52, 54, 56],
                    ['FR Size', '42R', '44R', '46R - 48R', '50R', '52R', '54R', '56R'],
                    ['Waist', { CM: '74 - 76', INCH: '29⅛ - 29⅞' }, { CM: '77 - 81', INCH: '30⅓ - 31⅞' }, { CM: '82 - 86', INCH: '32⅓ - 33⅞' }, { CM: '86 - 90', INCH: '33⅞ - 35⅖' }, { CM: '91 - 96', INCH: '35⅘ - 37⅘' }, { CM: '97 - 101', INCH: '38⅕ - 39⅘' }, { CM: '102 - 106', INCH: '40⅕ - 41⅔' }],
                    ['Hips', { CM: '84 - 86', INCH: '33⅛ - 33⅞' }, { CM: '87 - 91', INCH: '34⅓ - 35⅘' }, { CM: '92 - 97', INCH: '36⅕ - 38⅕' }, { CM: '97 - 102', INCH: '38⅕ - 40⅕' }, { CM: '103 - 108', INCH: '40⅗ - 42½' }, { CM: '109 - 113', INCH: '42⅞ - 44½' }, { CM: '114 - 118', INCH: '44⅞ - 46½' }],
                    ['Tights', { CM: '51 - 52', INCH: '20⅛ - 20½' }, { CM: '52 - 54', INCH: '20½ - 21⅓' }, { CM: '54 - 56', INCH: '21⅓ - 22' }, { CM: '56 - 58', INCH: '22 - 22⅘' }, { CM: '58 - 60', INCH: '22⅘ - 23⅗' }, { CM: '60 - 62', INCH: '23⅗ - 24⅖' }, { CM: '62 - 64', INCH: '24⅖ - 25⅕' }],
                    ['Urban Inch Size', { CM: 28, INCH: 11 }, { CM: '29/2 - 30/2', INCH: '11⅖ - 11⅘' }, { CM: '31 - 32', INCH: '12⅕ - 12⅗' }, { CM: '33 - 34', INCH: '13 - 13⅖' }, { CM: '35 - 36', INCH: '13⅘ - 14⅕' }, { CM: '38', INCH: '15' }, { CM: '40', INCH: '15⅔' }]
                ]}>
                <TableButton href='/products/Jeans' >SHOP JEANS</TableButton>
            </SizeTableAccordian>
            <SizeTableAccordian title='INSEAM LENGTHS' tableHeading='LABEL' indexColWidth='w-32' restColsWidth='w-24' unitBtns={null}
                columnHeadings={['Size', 'Insie Leg']}
                rowsData={[
                    ['Crop', 28, '71cm'],
                    ['Short', 30, '76cm'],
                    ['Regular', 32, '81cm'],
                    ['Tall', 34, '86cm'],
                    ['X-Tall', 36, '91cm']
                ]}>
            </SizeTableAccordian>
            <SizeTableAccordian title='SWIMSHORTS, LOUNGE BOTTOMS, UNDERWEAR' headingTracking_null tableHeading='Label (XS - XXL)' indexColWidth='w-32 md:w-1/5' restColsWidth='w-16 md:w-[10%]'
                columnHeadings={['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']}
                rowsData={[
                    ['UK + US Size', 38, 40, 42, 44, 46, 48, 50, 52],
                    ['EU Size', 48, 50, 52, 54, 56, 58, 60, 62],
                    ['Waist', { CM: '81-85', INCH: '31⅞ - 33½' }, { CM: '86-91', INCH: '33⅞ - 35⅘' }, { CM: '92-97', INCH: '36⅕ - 38⅕' }, { CM: '98-103', INCH: '38⅗ - 40⅗' }, { CM: '104-109', INCH: '40⅞ - 42⅞' }, { CM: '110-115', INCH: '45⅔ - 47⅗' }, { CM: '116-121', INCH: '45⅔ - 47⅗' }, { CM: '122-127', INCH: '48 - 50' }],
                    ['Hips', { CM: '93-97', INCH: '36⅗ - 38⅕' }, { CM: '98-103', INCH: '38⅗ - 40⅗' }, { CM: '104-109', INCH: '40⅞ - 42⅞' }, { CM: '110-115', INCH: '43⅓ - 45⅓' }, { CM: '116-121', INCH: '45⅔ - 47⅗' }, { CM: '122-127', INCH: '48 - 50' }, { CM: '128-133', INCH: '50⅖ - 52⅖' }, { CM: '134-139', INCH: '52⅘ - 54⅔' }]
                ]}>
            </SizeTableAccordian>
            <SizeTableAccordian title='BEACHCOVER UPS AND LOUNGE TOPS' headingTracking_null tableHeading='Label (XS - XXL)' indexColWidth='w-32 md:w-1/5' restColsWidth='w-16 md:w-[10%]'
                columnHeadings={['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']}
                rowsData={[
                    ['UK + US Size', 38, 40, 42, 44, 46, 48, 50, 52],
                    ['EU Size', 48, 50, 52, 54, 56, 58, 60, 62],
                    ['Chest', { CM: '94-98', INCH: '37 - 38⅗' }, { CM: '99-104', INCH: '39 - 40⅞' }, { CM: '105-110', INCH: '41⅓ - 43⅓' }, { CM: '111-116', INCH: '43⅔ - 45⅔' }, { CM: '117-122', INCH: '46⅛ - 48' }, { CM: '123-128', INCH: '48⅖ - 50⅖' }, { CM: '129-134', INCH: '50⅘ - 52⅘' }, { CM: '135-140', INCH: '53⅛ - 55⅛' }],
                    ['Waist', { CM: '81-85', INCH: '31⅞ - 33½' }, { CM: '86-91', INCH: '33⅞ - 35⅘' }, { CM: '92-97', INCH: '36⅕ - 38⅕' }, { CM: '98-103', INCH: '38⅗ - 40⅗' }, { CM: '104-109', INCH: '40⅞ - 42⅞' }, { CM: '110-115', INCH: '45⅔ - 47⅗' }, { CM: '116-121', INCH: '45⅔ - 47⅗' }, { CM: '122-127', INCH: '48 - 50' }],
                    ['Hips', { CM: '93-97', INCH: '36⅗ - 38⅕' }, { CM: '98-103', INCH: '38⅗ - 40⅗' }, { CM: '104-109', INCH: '40⅞ - 42⅞' }, { CM: '110-115', INCH: '43⅓ - 45⅓' }, { CM: '116-121', INCH: '45⅔ - 47⅗' }, { CM: '122-127', INCH: '48 - 50' }, { CM: '128-133', INCH: '50⅖ - 52⅖' }, { CM: '134-139', INCH: '52⅘ - 54⅔' }]
                ]}>
            </SizeTableAccordian>
            <SizeTableAccordian title='PAJAMA SETS' headingTracking_null tableHeading='Label (XS - XXL)' indexColWidth='w-32 md:w-1/5' restColsWidth='w-16 md:w-[10%]'
                columnHeadings={['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']}
                rowsData={[
                    ['UK + US Size', 38, 40, 42, 44, 46, 48, 50, 52],
                    ['EU Size', 48, 50, 52, 54, 56, 58, 60, 62],
                    ['Chest', { CM: '94-98', INCH: '37 - 38⅗' }, { CM: '99-104', INCH: '39 - 40⅞' }, { CM: '105-110', INCH: '41⅓ - 43⅓' }, { CM: '111-116', INCH: '43⅔ - 45⅔' }, { CM: '117-122', INCH: '46⅛ - 48' }, { CM: '123-128', INCH: '48⅖ - 50⅖' }, { CM: '129-134', INCH: '50⅘ - 52⅘' }, { CM: '135-140', INCH: '53⅛ - 55⅛' }],
                    ['Waist', { CM: '81-85', INCH: '31⅞ - 33½' }, { CM: '86-91', INCH: '33⅞ - 35⅘' }, { CM: '92-97', INCH: '36⅕ - 38⅕' }, { CM: '98-103', INCH: '38⅗ - 40⅗' }, { CM: '104-109', INCH: '40⅞ - 42⅞' }, { CM: '110-115', INCH: '45⅔ - 47⅗' }, { CM: '116-121', INCH: '45⅔ - 47⅗' }, { CM: '122-127', INCH: '48 - 50' }],
                    ['Hips', { CM: '93-97', INCH: '36⅗ - 38⅕' }, { CM: '98-103', INCH: '38⅗ - 40⅗' }, { CM: '104-109', INCH: '40⅞ - 42⅞' }, { CM: '110-115', INCH: '43⅓ - 45⅓' }, { CM: '116-121', INCH: '45⅔ - 47⅗' }, { CM: '122-127', INCH: '48 - 50' }, { CM: '128-133', INCH: '50⅖ - 52⅖' }, { CM: '134-139', INCH: '52⅘ - 54⅔' }]
                ]}>
            </SizeTableAccordian>
            <SizeTableAccordian title='SHOES' headingTracking_null tableHeading={null} indexColWidth='w-32' restColsWidth='w-16'
                unitBtns={null} containerWidth='2xl:w-full' columnHeadings={[]}
                rowsData={[
                    ['US Size', 6.5, 7, 7.5, 8, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11, 11.5, 12, 12, 12.5, 13, 13.5, 14],
                    ['UK Size', 5.5, 6, 6.5, 7, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10, 10.5, 11, 11, 11.5, 12, 12.5, 13],
                    ['EU Size', 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45, 45.5, 46, 46.5, 47, 47.5, 48],
                    ['CM*', 24, 24.5, 25, 25.5, 26, 26, 26.5, 27, 27.5, 27.5, 28, 28.5, 29, 29.5, 29.5, 30, 30.5, 31, 31.5],
                    ['INCH*', 9.5, 9.5, 10, 10, 10.25, 10.25, 10.5, 10.5, 10.75, 10.75, 11, 11.25, 11.5, 11.5, 11.75, 11.75, 12, 12.25, 12.25]
                ]}>
                <TableButton href='/products/Jeans' >SHOP SHOES</TableButton>
            </SizeTableAccordian>
            <SizeTableAccordian title='SOCKS' tableHeading='LABEL' indexColWidth='w-32' restColsWidth='w-28' unitBtns={null}
                containerWidth='w-full' columnHeadings={['39 / 42', '43 / 46']}
                rowsData={[
                    ['Shoe Size', '39', '43'],
                    ['Foot Length Cm', '24.4 - 27', '27.1 - 29.7']
                ]}></SizeTableAccordian>
            <SizeTableAccordian title='BELTS' tableHeading='SIZE' indexColWidth='w-24' restColsWidth='w-16' unitBtns={null}
                columnHeadings={['S - M', 'L - XL']} rowsData={[['CM', '70cm', '80cm']]}>
            </SizeTableAccordian>
            <h1 className="mt-20 lg:mt-28 mb-6 font_gotham_bold text-sm md:text-lg xl:text-xl tracking-vast">TAILORED</h1>

            <HelpSection />
        </CutomerServices>
    )
}
