import React from 'react'
import Sidebaradmin from '../sidebar'
import CardAdmin from '@/components/cards/cardadmin'
import LineChart from '@/components/charts/LineChart'

const index = () => {
  return (
    <Sidebaradmin>

            <CardAdmin>
                <div className='gird grid-cols-1' >

                    <LineChart/>

                </div>
            </CardAdmin>

    </Sidebaradmin>
  )
}

export default index