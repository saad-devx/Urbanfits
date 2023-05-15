import React from 'react'
import Sidebaradmin from '../sidebar'
import CardAdmin from '@/components/cards/cardadmin'
import LineChart from '@/components/charts/LineChart'
import { AvatarIcon } from '@/public/sidebaricons/AvatarIcon'

const index = () => {
  return (
    <Sidebaradmin>

      
        <section className='grid grid-cols-4 gap-[27px] mt-[20px] ' >
          <div className='flex flex-col gap-[13px]' >
            <CardAdmin>
              <div className='px-[20px] py-[30px] rounded-[15px] flex justify-between items-center ' >
                <div className='flex flex-col gap-[8px]' >
                  <p className=' text-[14px] font-[400] ' >Daily Signup</p>
                  <p className=' text-[22px] font-[500] ' >1,503</p>
                </div>
                <div className='' >
                  <AvatarIcon fill="#F5F5F5" stroke="black" />
                </div>
              </div>
            </CardAdmin>
            <CardAdmin>
              <div className='px-[20px] py-[30px] rounded-[15px] flex justify-between items-center ' >
                <div className='flex flex-col gap-[8px]' >
                  <p className=' text-[14px] font-[400] ' >Products</p>
                  <p className=' text-[22px] font-[500] ' >1,255</p>
                  <p className=' text-[12px] font-[300] ' >In 20 Categories</p>
                </div>
                <div className='' >
                  <AvatarIcon fill="#F5F5F5" stroke="black" />
                </div>
              </div>
            </CardAdmin>
            

          </div>
          <div className='flex flex-col gap-[13px]' >
            <CardAdmin>
              <div className='px-[20px] py-[30px] rounded-[15px] flex justify-between items-center ' >
                <div className='flex flex-col gap-[8px]' >
                  <p className=' text-[14px] font-[400] ' >Daily Visitors</p>
                  <p className=' text-[22px] font-[500] ' >7,903</p>
                </div>
                <div className='' >
                  <AvatarIcon fill="#F5F5F5" stroke="black" />
                </div>
              </div>
            </CardAdmin>
            <CardAdmin>
              <div className='px-[20px] py-[30px] rounded-[15px] flex justify-between items-center ' >
                <div className='flex flex-col gap-[8px]' >
                  <p className=' text-[14px] font-[400] ' >Monthly Earning</p>
                  <p className=' text-[22px] font-[500] ' >$37,903</p>
                  <p className=' text-[12px] font-[300] ' >Based in your local time</p>
                </div>
                <div className='' >
                  <AvatarIcon fill="#F5F5F5" stroke="black" />
                </div>
              </div>
            </CardAdmin>
            

          </div>

          <div className='flex flex-col gap-[13px]' >
            <CardAdmin>
              <div className='px-[20px] py-[30px] rounded-[15px] flex justify-between items-center ' >
                <div className='flex flex-col gap-[8px]' >
                  <p className=' text-[14px] font-[400] ' >Orders</p>
                  <p className=' text-[22px] font-[500] ' >7,903</p>
                  <p className=' text-[12px] font-[300] ' >Excluding orders in transit</p>
                </div>
                <div className='' >
                  <AvatarIcon fill="#F5F5F5" stroke="black" />
                </div>
              </div>
            </CardAdmin>
            <CardAdmin>
              <div className='px-[20px] py-[30px] rounded-[15px] flex justify-between items-center ' >
                <div className='flex flex-col gap-[8px]' >
                  <p className=' text-[14px] font-[400] ' >Monthly Sales</p>
                  <p className='text-[22px] font-[500]' >400 <span className='text-[12px] font-[300]' >Units</span> </p>  
                </div>
                <div className='' >
                  <AvatarIcon fill="#F5F5F5" stroke="black" />
                </div>
              </div>
            </CardAdmin>
            

          </div>
          <div className='flex flex-col gap-[13px]' >
            <CardAdmin>
              <div className='px-[20px] py-[30px] rounded-[15px] flex justify-between items-center ' >
                <div className='flex flex-col gap-[8px]' >
                  <p className=' text-[14px] font-[400] ' >Daily Revenue</p>
                  <p className=' text-[22px] font-[500] ' >7,903</p>
                  <p className=' text-[12px] font-[300] ' >Based in your local time</p>
                </div>
                <div className='' >
                  <AvatarIcon fill="#F5F5F5" stroke="black" />
                </div>
              </div>
            </CardAdmin>
            <CardAdmin>
              <div className='px-[20px] py-[30px] rounded-[15px] flex justify-between items-center ' >
                <div className='flex flex-col gap-[8px]' >
                  <p className=' text-[14px] font-[400] ' >Cancelled Orders</p>
                  <p className='text-[22px] font-[500]' > 300 <span className='text-[12px] font-[300]' >Units</span> </p>  
                </div>
                <div className='' >
                  <AvatarIcon fill="#F5F5F5" stroke="black" />
                </div>
              </div>
            </CardAdmin>
            

          </div>
        </section>

        <section className='grid grid-cols-6 mt-[30px] ' >
          <div className='col-span-4' >
            <CardAdmin>
              <div className='px-[30px] py-[33.5px] ' >  
              <LineChart/>

              </div>
            </CardAdmin>
          </div>
          <div className='col-span-2' >
            <CardAdmin>

            </CardAdmin>
          </div>
        </section>






            {/* <CardAdmin>
                <div className='gird grid-cols-1' >
                    <LineChart/>
                </div>
            </CardAdmin> */}

    </Sidebaradmin>
  )
}

export default index