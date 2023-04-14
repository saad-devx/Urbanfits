import React from 'react'
import CutomerServices from '../index'
import LinkBtn from '@/components/buttons/link_btn'
import Accordian from '@/components/accordians/accordian'
import GuideTable from '@/components/sizeGuideTable'

export default function Women() {
    return (
        <CutomerServices>
            <Accordian title='COATS, JACKETS, BLAZERS'>
                <GuideTable heading='URBAN FITS' indexColWidth='w-32 xl:w-[16%]' restColsWidth='w-15 xl:w-[7%]'
                    columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL', '7XL']}
                    rowsData={[
                            ['UK/IE Size', 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
                            ['US Size', 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
                            ['EU Size', 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
                            ['FR Size', 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
                            ['IT Size', 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
                            ['Sleeve', { CM: '77.8- 78.3', INCH: '30⅗- 30⅘' }, { CM: '78.3- 78.8', INCH: '30⅘- 31' }, { CM: '78.8- 79.3', INCH: '31- 31⅕' }, { CM: '79.3- 79.8', INCH: '31⅕- 31⅖' }, { CM: '79.8- 80.3', INCH: '31⅖ - 31⅗' }, { CM: '80.3- 80.8', INCH: '31⅗ - 31⅘' }, { CM: '80.8- 81.3', INCH: '31⅘- 32' }, { CM: '81.3- 81.8', INCH: '32- 32⅕' }, { CM: '81.8- 82.2', INCH: '32⅕- 32⅖' }, { CM: '82.2- 82.8', INCH: '32⅖- 32⅗' }, { CM: '82.8- 83.2', INCH: '32⅗- 32⅘' }, { CM: '83.5- 84.5', INCH: '32⅞- 33⅓' }],
                            ['Chest', { CM: '76.5- 80.5', INCH: '30⅛- 31⅔' }, { CM: '80.5- 84.5', INCH: '31⅔- 33⅓' }, { CM: '84.5- 88.5', INCH: '33⅓- 34⅘' }, { CM: '88.5-92.5', INCH: '34⅘- 36⅖' }, { CM: '92.5- 96.5', INCH: '36⅖ - 38' }, { CM: '96.5- 101.5', INCH: '38 - 40' }, { CM: '101.5- 106.5', INCH: '40- 41⅞' }, { CM: '106.5- 112', INCH: '41⅞- 44⅛' }, { CM: '113- 118', INCH: '44½- 46½' }, { CM: '118- 123', INCH: '46½- 48⅖' }, { CM: '123- 128', INCH: '48⅖- 50⅖' }, { CM: '128- 134', INCH: '50⅖ - 52⅘' }],
                            ['Waist', { CM: '60- 64', INCH: '30⅛ - 31⅔' }, { CM: '64- 68', INCH: '31⅔ - 33⅓' }, { CM: '68- 72', INCH: '33⅓ - 34⅘' }, { CM: '72- 76', INCH: '34⅘ - 36⅖' }, { CM: '76- 81', INCH: '36⅖ - 38' }, { CM: '81- 86', INCH: '38 - 40' }, { CM: '86- 91', INCH: '40 - 41⅞' }, { CM: '91- 96', INCH: '41⅞ - 44⅛' }, { CM: '97 - 102', INCH: '44½ - 46½' }, { CM: '102 - 107', INCH: '46½ - 48⅖' }, { CM: '107 - 112', INCH: '48⅖ - 50⅖' }, { CM: '112 - 118', INCH: '50⅖ - 52⅘' }],
                            ['Hips', { CM: '85- 89', INCH: '33½- 35' }, { CM: '89- 93', INCH: '35- 36⅗' }, { CM: '93- 97', INCH: '36⅗- 38⅕' }, { CM: '97- 101', INCH: '38⅕- 39⅘' }, { CM: '101- 105', INCH: '39⅘ - 41⅓' }, { CM: '105- 110', INCH: '41⅓ - 43⅓' }, { CM: '110- 115', INCH: '43⅓- 45⅓' }, { CM: '115- 120', INCH: '45⅓ - 47⅕' }, { CM: '121- 126', INCH: '47⅗- 49⅗' }, { CM: '126- 131', INCH: '49⅗- 51⅗' }, { CM: '131- 136', INCH: '51⅗- 53½' }, { CM: '136- 141', INCH: '53½- 55½' }]
                        ]}
                />
            </Accordian>
            <Accordian title='SWEATS, HOODIES, POLO KNITS TEES'>
                <GuideTable heading='URBAN FITS' indexColWidth='w-32 xl:w-[16%]' restColsWidth='w-15 xl:w-[7%]'
                    columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL', '7XL']}
                    rowsData={[
                            ['UK/IE Size', 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
                            ['US Size', 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
                            ['EU Size', 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
                            ['FR Size', 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
                            ['IT Size', 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
                            ['Sleeve', { CM: '77.8- 78.3', INCH: '30⅗- 30⅘' }, { CM: '78.3- 78.8', INCH: '30⅘- 31' }, { CM: '78.8- 79.3', INCH: '31- 31⅕' }, { CM: '79.3- 79.8', INCH: '31⅕- 31⅖' }, { CM: '79.8- 80.3', INCH: '31⅖ - 31⅗' }, { CM: '80.3- 80.8', INCH: '31⅗ - 31⅘' }, { CM: '80.8- 81.3', INCH: '31⅘- 32' }, { CM: '81.3- 81.8', INCH: '32- 32⅕' }, { CM: '81.8- 82.2', INCH: '32⅕- 32⅖' }, { CM: '82.2- 82.8', INCH: '32⅖- 32⅗' }, { CM: '82.8- 83.2', INCH: '32⅗- 32⅘' }, { CM: '83.5- 84.5', INCH: '32⅞- 33⅓' }],
                            ['Chest', { CM: '76.5- 80.5', INCH: '30⅛- 31⅔' }, { CM: '80.5- 84.5', INCH: '31⅔- 33⅓' }, { CM: '84.5- 88.5', INCH: '33⅓- 34⅘' }, { CM: '88.5-92.5', INCH: '34⅘- 36⅖' }, { CM: '92.5- 96.5', INCH: '36⅖ - 38' }, { CM: '96.5- 101.5', INCH: '38 - 40' }, { CM: '101.5- 106.5', INCH: '40- 41⅞' }, { CM: '106.5- 112', INCH: '41⅞- 44⅛' }, { CM: '113- 118', INCH: '44½- 46½' }, { CM: '118- 123', INCH: '46½- 48⅖' }, { CM: '123- 128', INCH: '48⅖- 50⅖' }, { CM: '128- 134', INCH: '50⅖ - 52⅘' }],
                            ['Waist', { CM: '60- 64', INCH: '30⅛- 31⅔' }, { CM: '64- 68', INCH: '31⅔- 33⅓' }, { CM: '68- 72', INCH: '33⅓- 34⅘' }, { CM: '72- 76', INCH: '34⅘- 36⅖' }, { CM: '76- 81', INCH: '36⅖- 38' }, { CM: '81- 86', INCH: '38- 40' }, { CM: '86- 91', INCH: '40- 41⅞' }, { CM: '91- 96', INCH: '41⅞- 44⅛' }, { CM: '97- 102', INCH: '44½- 46½' }, { CM: '102- 107', INCH: '46½- 48⅖' }, { CM: '107- 112', INCH: '48⅖ - 50⅖' }, { CM: '112- 118', INCH: '50⅖- 52⅘' }],
                        ]}
                />
            </Accordian>
            <Accordian title='DRESSES, SKIRTS, JUMPSUITS'>
                <GuideTable heading='URBAN FITS' indexColWidth='w-32 xl:w-[16%]' restColsWidth='w-15 xl:w-[7%]'
                    columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL', '7XL']}
                    rowsData={[
                            ['UK/IE Size', 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
                            ['US Size', 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
                            ['EU Size', 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
                            ['FR Size', 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
                            ['IT Size', 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
                            ['Sleeve', { CM: '77.8- 78.3', INCH: '30⅗- 30⅘' }, { CM: '78.3- 78.8', INCH: '30⅘- 31' }, { CM: '78.8- 79.3', INCH: '31- 31⅕' }, { CM: '79.3- 79.8', INCH: '31⅕- 31⅖' }, { CM: '79.8- 80.3', INCH: '31⅖ - 31⅗' }, { CM: '80.3- 80.8', INCH: '31⅗ - 31⅘' }, { CM: '80.8- 81.3', INCH: '31⅘- 32' }, { CM: '81.3- 81.8', INCH: '32- 32⅕' }, { CM: '81.8- 82.2', INCH: '32⅕- 32⅖' }, { CM: '82.2- 82.8', INCH: '32⅖- 32⅗' }, { CM: '82.8- 83.2', INCH: '32⅗- 32⅘' }, { CM: '83.5- 84.5', INCH: '32⅞- 33⅓' }],
                            ['Chest', { CM: '76.5- 80.5', INCH: '30⅛- 31⅔' }, { CM: '80.5- 84.5', INCH: '31⅔- 33⅓' }, { CM: '84.5- 88.5', INCH: '33⅓- 34⅘' }, { CM: '88.5-92.5', INCH: '34⅘- 36⅖' }, { CM: '92.5- 96.5', INCH: '36⅖ - 38' }, { CM: '96.5- 101.5', INCH: '38 - 40' }, { CM: '101.5- 106.5', INCH: '40- 41⅞' }, { CM: '106.5- 112', INCH: '41⅞- 44⅛' }, { CM: '113- 118', INCH: '44½- 46½' }, { CM: '118- 123', INCH: '46½- 48⅖' }, { CM: '123- 128', INCH: '48⅖- 50⅖' }, { CM: '128- 134', INCH: '50⅖ - 52⅘' }],
                            ['Hips', { CM: '85- 89', INCH: '33½- 35' }, { CM: '89- 93', INCH: '35- 36⅗' }, { CM: '93- 97', INCH: '36⅗- 38⅕' }, { CM: '97- 101', INCH: '38⅕- 39⅘' }, { CM: '101- 105', INCH: '39⅘ - 41⅓' }, { CM: '105- 110', INCH: '41⅓ - 43⅓' }, { CM: '110- 115', INCH: '43⅓- 45⅓' }, { CM: '115- 120', INCH: '45⅓ - 47⅕' }, { CM: '121- 126', INCH: '47⅗- 49⅗' }, { CM: '126- 131', INCH: '49⅗- 51⅗' }, { CM: '131- 136', INCH: '51⅗- 53½' }, { CM: '136- 141', INCH: '53½- 55½' }]
                        ]}
                />
                <LinkBtn href='/products/Dresses' fontSize='text-xs' classes='w-[136px]' >SHOP DRESSES</LinkBtn>
            </Accordian>
            <Accordian title='SHIRTS, BLOUSES'>
                <GuideTable heading='URBAN FITS' indexColWidth='w-32 xl:w-[16%]' restColsWidth='w-15 xl:w-[7%]'
                    columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL', '7XL']}
                    rowsData={[
                            ['UK/IE Size', 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
                            ['US Size', 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
                            ['EU Size', 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
                            ['FR Size', 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
                            ['IT Size', 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
                            ['Sleeve', { CM: '77.8- 78.3', INCH: '30⅗- 30⅘' }, { CM: '78.3- 78.8', INCH: '30⅘- 31' }, { CM: '78.8- 79.3', INCH: '31- 31⅕' }, { CM: '79.3- 79.8', INCH: '31⅕- 31⅖' }, { CM: '79.8- 80.3', INCH: '31⅖ - 31⅗' }, { CM: '80.3- 80.8', INCH: '31⅗ - 31⅘' }, { CM: '80.8- 81.3', INCH: '31⅘- 32' }, { CM: '81.3- 81.8', INCH: '32- 32⅕' }, { CM: '81.8- 82.2', INCH: '32⅕- 32⅖' }, { CM: '82.2- 82.8', INCH: '32⅖- 32⅗' }, { CM: '82.8- 83.2', INCH: '32⅗- 32⅘' }, { CM: '83.5- 84.5', INCH: '32⅞- 33⅓' }],
                            ['Chest', { CM: '76.5- 80.5', INCH: '30⅛- 31⅔' }, { CM: '80.5- 84.5', INCH: '31⅔- 33⅓' }, { CM: '84.5- 88.5', INCH: '33⅓- 34⅘' }, { CM: '88.5-92.5', INCH: '34⅘- 36⅖' }, { CM: '92.5- 96.5', INCH: '36⅖ - 38' }, { CM: '96.5- 101.5', INCH: '38 - 40' }, { CM: '101.5- 106.5', INCH: '40- 41⅞' }, { CM: '106.5- 112', INCH: '41⅞- 44⅛' }, { CM: '113- 118', INCH: '44½- 46½' }, { CM: '118- 123', INCH: '46½- 48⅖' }, { CM: '123- 128', INCH: '48⅖- 50⅖' }, { CM: '128- 134', INCH: '50⅖ - 52⅘' }],
                            ['Waist', { CM: '60- 64', INCH: '30⅛ - 31⅔' }, { CM: '64- 68', INCH: '31⅔ - 33⅓' }, { CM: '68- 72', INCH: '33⅓ - 34⅘' }, { CM: '72- 76', INCH: '34⅘ - 36⅖' }, { CM: '76- 81', INCH: '36⅖ - 38' }, { CM: '81- 86', INCH: '38 - 40' }, { CM: '86- 91', INCH: '40 - 41⅞' }, { CM: '91- 96', INCH: '41⅞ - 44⅛' }, { CM: '97 - 102', INCH: '44½ - 46½' }, { CM: '102 - 107', INCH: '46½ - 48⅖' }, { CM: '107 - 112', INCH: '48⅖ - 50⅖' }, { CM: '112 - 118', INCH: '50⅖ - 52⅘' }],
                            ['Hips', { CM: '85- 89', INCH: '33½- 35' }, { CM: '89- 93', INCH: '35- 36⅗' }, { CM: '93- 97', INCH: '36⅗- 38⅕' }, { CM: '97- 101', INCH: '38⅕- 39⅘' }, { CM: '101- 105', INCH: '39⅘ - 41⅓' }, { CM: '105- 110', INCH: '41⅓ - 43⅓' }, { CM: '110- 115', INCH: '43⅓- 45⅓' }, { CM: '115- 120', INCH: '45⅓ - 47⅕' }, { CM: '121- 126', INCH: '47⅗- 49⅗' }, { CM: '126- 131', INCH: '49⅗- 51⅗' }, { CM: '131- 136', INCH: '51⅗- 53½' }, { CM: '136- 141', INCH: '53½- 55½' }]
                        ]}
                />
            </Accordian>
            <Accordian title='URBAN DENIM'>
                <GuideTable heading='URBAN FITS' indexColWidth='w-32 xl:w-[16%]' restColsWidth='w-15 xl:w-[7.63%]'
                    columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL']}
                    rowsData={[
                            ['UK/IE Size', 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                            ['EU Size', 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
                            ['Urban Jeans Size', '24', '25-26', '27-28', '29-30', '31', '33', '34', '36', '38', '40', '42'],
                            ['Waist', { CM: '61 - 64', INCH: '24 - 25⅕' }, { CM: '65- 68', INCH: '25⅗ - 26⅘' }, { CM: '69- 72', INCH: '27⅕ - 28⅓' }, { CM: '73- 76', INCH: '28⅔ - 29⅞' }, { CM: '77- 78.5', INCH: '30⅓ - 30⅞' }, { CM: '82- 86', INCH: '32⅓ - 33⅞' }, { CM: '87- 92', INCH: '34⅓ - 36⅕' }, { CM: '93- 98', INCH: '36⅗ - 38⅗' }, { CM: '99 - 104', INCH: '39 - 40⅞' }, { CM: '105 - 110', INCH: '41⅓ - 43⅓' }, { CM: '111 - 116', INCH: '43⅔ - 45⅔' }],
                            ['Hips', { CM: '76 - 79', INCH: '29⅞ - 31⅛' }, { CM: '80 - 83', INCH: '31½ - 32⅔' }, { CM: '84 - 87', INCH: '33⅛ - 34⅓' }, { CM: '88 - 91', INCH: '34⅗ - 35⅘' }, { CM: '92 - 93.5', INCH: '36⅕ - 36⅘' }, { CM: '96 - 101', INCH: '37⅘ - 39⅘' }, { CM: '101 - 106', INCH: '39⅘ - 41⅔' }, { CM: '107 - 112', INCH: '42⅛ - 44⅛' }, { CM: '113 - 118', INCH: '44½ - 46½' }, { CM: '119 - 124', INCH: '46⅞ - 48⅘' }, { CM: '125 - 130', INCH: '49⅕ - 51⅕' }],
                            ['Legs', { CM: '86 - 89', INCH: '33⅞ - 35' }, { CM: '90 - 93', INCH: '35⅖ - 36⅗' }, { CM: '94 - 97', INCH: '37 - 38⅕' }, { CM: '98 - 101', INCH: '38⅗ - 39⅘' }, { CM: '102 - 103.5', INCH: '40⅕ - 40⅔' }, { CM: '106 - 111', INCH: '41⅔ - 43⅔' }, { CM: '112 - 116', INCH: '44⅛ - 45⅔' }, { CM: '117 - 122', INCH: '46⅛ - 48' }, { CM: '123 - 128', INCH: '48⅖ - 50⅖' }, { CM: '129 - 134', INCH: '50⅘ - 52⅘' }, { CM: '135 - 140', INCH: '53⅛ - 55⅛' }]
                        ]}
                />
            </Accordian>
            <Accordian title='BEACH COVER UPS TOPS, LOUNGE TOPS, BIKINI TOPS, BRAS (ALPHA SIZES)'>
                <GuideTable heading='URBAN FITS' indexColWidth='w-32 xl:w-1/5' restColsWidth='w-15 xl:w-[10%]'
                    columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']}
                    rowsData={[
                            ['US Size', 0, 2, 4, '6-8', '8-10', '10-12', 14, 16, '18-20'],
                            ['UK Size', 4, 6, 8, '10-12', '12-14', '14-16', 18, 20, '22-24'],
                            ['EU Size', 32, 34, 36, '38-40', '40-42', '42-44', 46, 48, '50-52'],
                            ['FR Size', 34, 36, 38, '40-42', '42-44', '44-46', 48, 50, '52-54'],
                            ['IT Size', 38, 40, 42, '44-46', '46-48', '48-50', 52, 54, '56-58'],
                            ['Chest', { CM: '74 - 78', INCH: '29⅛ - 30⅔' }, { CM: '79 - 83', INCH: '31⅛ - 32⅔' }, { CM: '84 - 89', INCH: '33⅛ - 35' }, { CM: '90 - 95', INCH: '35⅖ - 37⅖' }, { CM: '96 - 101', INCH: '37⅘ - 39⅘' }, { CM: '102 - 107', INCH: '40⅕ - 42⅛' }, { CM: '108 - 113', INCH: '42½ - 44½' }, { CM: '114 - 120', INCH: '44⅞ - 47⅕' }, { CM: '121 - 127', INCH: '47⅗ - 50' }],
                            ['Waist', { CM: '56 - 60', INCH: '22 - 23⅗' }, { CM: '61 - 65', INCH: '24 - 25⅗' }, { CM: '66 - 71', INCH: '26 - 28' }, { CM: '72 - 77', INCH: '28⅓ - 30⅓' }, { CM: '78 - 83', INCH: '30⅔ - 32⅔' }, { CM: '84 - 89', INCH: '33⅛ - 35' }, { CM: '92 - 97', INCH: '36⅕ - 38⅕' }, { CM: '98 - 104', INCH: '38⅗ - 40⅞' }, { CM: '105 - 111', INCH: '41⅓ - 43⅔' }]
                        ]}
                />
            </Accordian>
            <Accordian title='BEACH COVER UPS BOTTOMS, LOUNGE BOTTOMS, BIKINI BOTTOMS, COORDINATE PANTIES'>
                <GuideTable heading='URBAN FITS' indexColWidth='w-32 xl:w-1/5' restColsWidth='w-15 xl:w-[10%]'
                    columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']}
                    rowsData={[
                            ['US Size', 0, 2, 4, '6-8', '8-10', '10-12', 14, 16, '18-20'],
                            ['UK Size', 4, 6, 8, '10-12', '12-14', '14-16', 18, 20, '22-24'],
                            ['EU Size', 32, 34, 36, '38-40', '40-42', '42-44', 46, 48, '50-52'],
                            ['FR Size', 34, 36, 38, '40-42', '42-44', '44-46', 48, 50, '52-54'],
                            ['IT Size', 38, 40, 42, '44-46', '46-48', '48-50', 52, 54, '56-58'],
                            ['Waist', { CM: '56 - 60', INCH: '22 - 23⅗' }, { CM: '61 - 65', INCH: '24 - 25⅗' }, { CM: '66 - 71', INCH: '26 - 28' }, { CM: '72 - 77', INCH: '28⅓ - 30⅓' }, { CM: '78 - 83', INCH: '30⅔ - 32⅔' }, { CM: '84 - 89', INCH: '33⅛ - 35' }, { CM: '92 - 97', INCH: '36⅕ - 38⅕' }, { CM: '98 - 104', INCH: '38⅗ - 40⅞' }, { CM: '105 - 111', INCH: '41⅓ - 43⅔' }],
                            ['Hips', { CM: '82 - 86', INCH: '32⅓ - 33⅞' }, { CM: '87 - 91', INCH: '34⅓ - 35⅘' }, { CM: '92 - 97', INCH: '36⅕ - 38⅕' }, { CM: '98 - 103', INCH: '38⅗ - 40⅗' }, { CM: '104 - 109', INCH: '40⅞ - 42⅞' }, { CM: '110 - 115', INCH: '43⅓ - 45⅓' }, { CM: '116 - 121', INCH: '45⅔ - 47⅗' }, { CM: '122 - 128', INCH: '48 - 50⅖' }, { CM: '129 - 135', INCH: '50⅘ - 53⅛' }]
                        ]}
                />
            </Accordian>
            <Accordian title='PAJAMA SETS'>
                <GuideTable heading='URBAN FITS' indexColWidth='w-32 xl:w-1/5' restColsWidth='w-15 xl:w-[10%]'
                    columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']}
                    rowsData={[
                            ['US Size', 0, 2, 4, '6-8', '8-10', '10-12', 14, 16, '18-20'],
                            ['UK Size', 4, 6, 8, '10-12', '12-14', '14-16', 18, 20, '22-24'],
                            ['EU Size', 32, 34, 36, '38-40', '40-42', '42-44', 46, 48, '50-52'],
                            ['FR Size', 34, 36, 38, '40-42', '42-44', '44-46', 48, 50, '52-54'],
                            ['IT Size', 38, 40, 42, '44-46', '46-48', '48-50', 52, 54, '56-58'],
                            ['Chest', { CM: '74 - 78', INCH: '29⅛ - 30⅔' }, { CM: '79 - 83', INCH: '31⅛ - 32⅔' }, { CM: '84 - 89', INCH: '33⅛ - 35' }, { CM: '90 - 95', INCH: '35⅖ - 37⅖' }, { CM: '96 - 101', INCH: '37⅘ - 39⅘' }, { CM: '102 - 107', INCH: '40⅕ - 42⅛' }, { CM: '108 - 113', INCH: '42½ - 44½' }, { CM: '114 - 120', INCH: '44⅞ - 47⅕' }, { CM: '121 - 127', INCH: '47⅗ - 50' }],
                            ['Waist', { CM: '56 - 60', INCH: '22 - 23⅗' }, { CM: '61 - 65', INCH: '24 - 25⅗' }, { CM: '66 - 71', INCH: '26 - 28' }, { CM: '72 - 77', INCH: '28⅓ - 30⅓' }, { CM: '78 - 83', INCH: '30⅔ - 32⅔' }, { CM: '84 - 89', INCH: '33⅛ - 35' }, { CM: '92 - 97', INCH: '36⅕ - 38⅕' }, { CM: '98 - 104', INCH: '38⅗ - 40⅞' }, { CM: '105 - 111', INCH: '41⅓ - 43⅔' }],
                            ['Hips', { CM: '82 - 86', INCH: '32⅓ - 33⅞' }, { CM: '87 - 91', INCH: '34⅓ - 35⅘' }, { CM: '92 - 97', INCH: '36⅕ - 38⅕' }, { CM: '98 - 103', INCH: '38⅗ - 40⅗' }, { CM: '104 - 109', INCH: '40⅞ - 42⅞' }, { CM: '110 - 115', INCH: '43⅓ - 45⅓' }, { CM: '116 - 121', INCH: '45⅔ - 47⅗' }, { CM: '122 - 128', INCH: '48 - 50⅖' }, { CM: '129 - 135', INCH: '50⅘ - 53⅛' }]
                        ]}
                />
            </Accordian>
            <Accordian title='WOMEN SHOES'>
                <GuideTable heading='' indexColWidth='w-32 xl:w-[8%]' restColsWidth='w-15 xl:w-[5.75%]'
                    columnHeadings={['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', '10XL', '11XL']}
                    rowsData={[
                            ['UK Size', 2.5, 3, 3.5, 3.5, 4, 4.5, 5, 5.5, 6, 6, 6.5, 6.5, 7, 7, 7.5, 7.5,],
                            ['EU Size', 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5],
                            ['US Size', 5, 5.5, 6, 6, 6.5, 7, 7.5, 8, 8.5, 8.5, 9, 9, 9.5, 9.5, 10, 10],
                            ['CM', { CM: 22, INCH: '8⅔' }, { CM: 22.5, INCH: '8⅞' }, { CM: 23, INCH: '9⅛' }, { CM: 23, INCH: '9⅛' }, { CM: 23.5, INCH: '9⅓' }, { CM: 23.5, INCH: '9⅓' }, { CM: 24, INCH: '9⅖' }, { CM: 24.5, INCH: '9⅗' }, { CM: 25, INCH: '9⅘' }, { CM: 25, INCH: '9⅘' }, { CM: 25.5, INCH: 10 }, { CM: 25.5, INCH: 10 }, { CM: 26, INCH: '10⅕' }, { CM: 26.5, INCH: '10⅖' }, { CM: 27, INCH: '10⅗' }, { CM: 27.5, INCH: '10⅘' }]
                        ]}
                />
                <LinkBtn href='/products/Women-Shoes' fontSize='text-xs' classes='w-[136px]' >SHOP WOMEN SHOES</LinkBtn>
            </Accordian>
            <Accordian title='BELTS'>
                <GuideTable heading='Size' indexColWidth='w-24' restColsWidth='w-16' unitBtns={null}
                    columnHeadings={['S-M', 'L-XL']} rowsData={[['CM', '70cm', '80cm']]}
                />
            </Accordian>
            <Accordian title='SOCKS'>
                <GuideTable heading='LABEL' indexColWidth='w-32' restColsWidth='w-20' unitBtns={null}
                    columnHeadings={['S-M', 'L-XL']}
                    rowsData={[
                        ['Shoe Size', '35', '39'],
                        ['Foot Length', '21.7-24.3', '24.4-27']
                    ]}
                />
            </Accordian>
        </CutomerServices>
    )
}
