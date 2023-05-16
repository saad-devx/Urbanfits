import React from 'react'
import Sidebaradmin from '../sidebar'
import CardAdmin from '@/components/cards/cardadmin'
import LineChart from '@/components/charts/LineChart'
import { AvatarIcon } from '@/public/sidebaricons/AvatarIcon'
import DoughnutChart from '@/components/charts/DoughnutChart'
import DownloadIcon from '@/public/icons/DownloadIcon'
import LineChart2 from '@/components/charts/LineChart2'
import BarChart from '@/components/charts/BarChart'

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

        <section className='grid grid-cols-6 gap-[27px] mt-[30px] ' >
          <div className='col-span-4' >
            <CardAdmin>
              <div className='px-[30px] py-[33.5px] ' >  
              <p className='text-[22px] font-[500] mb-[34px] ' >Sale Report</p>
              <LineChart/>

              <div className='flex gap-[70px] items-center text-[14px] font-[400] mt-[30px] ' >

                <span className='flex gap-[10px] items-center ' >
                  <div className='w-[15px] h-[15px] rounded-[50px] bg-[#88B5E2]' />
                  <p>Via Referral</p>
                </span>
                <span className='flex gap-[10px] items-center ' >
                  <div className='w-[15px] h-[15px] rounded-[50px] bg-[#C7FCDF]' />
                  <p>Direct</p>
                </span>
                <span className='flex gap-[10px] items-center ' >
                  <div className='w-[15px] h-[15px] rounded-[50px] bg-[#FEDDE1]' />
                  <p>Via Social</p>
                </span>

              </div>

              </div>
            </CardAdmin>
          </div>
          <div className='col-span-2' >
            <CardAdmin>
              <div className='px-[30px] py-[33.5px] ' >
                <p className='text-[22px] font-[500] mb-[20px] ' >Order Review</p>
                  <DoughnutChart/>

                  <p className='text-[14px]  font-[400] ' >
                    <DownloadIcon/>
                  Download Overall Report
                  </p>
                  <hr />
                  <div className='grid grid-cols-2 gap-[44px] text-[13px] font-[400] ' >
                      <div className='flex flex-col gap-[20px] ' >
                        <span className='flex gap-[10px] items-center ' >
                          <div className='w-[15px] h-[15px] rounded-[50px] bg-[#50D7AB]' />
                          <p>Via Referral</p>
                        </span>
                        <span className='flex gap-[10px] items-center ' >
                          <div className='w-[15px] h-[15px] rounded-[50px] bg-[#88AAF3]' />
                          <p>Via Referral</p>
                        </span>
                        <span className='flex gap-[10px] items-center ' >
                          <div className='w-[15px] h-[15px] rounded-[50px] bg-[#9586CD]' />
                          <p>Via Referral</p>
                        </span>
                      </div>
                      <div className='flex flex-col gap-[20px] ' >
                        <span className='flex gap-[10px] items-center ' >
                          <div className='w-[15px] h-[15px] rounded-[50px] bg-[#A4D9E5]' />
                          <p>Via Referral</p>
                        </span>
                        <span className='flex gap-[10px] items-center ' >
                          <div className='w-[15px] h-[15px] rounded-[50px] bg-[#F3D676]' />
                          <p>Via Referral</p>
                        </span>
                        <span className='flex gap-[10px] items-center ' >
                          <div className='w-[15px] h-[15px] rounded-[50px] bg-[#ED9090]' />
                          <p>Via Referral</p>
                        </span>
                      </div>
                  </div>
              </div>  
            </CardAdmin>
          </div>
        </section>

        <section className='grid grid-cols-6 gap-[27px] mt-[30px] ' >
          <div className='col-span-4' >
            <CardAdmin>
              <div className='px-[30px] py-[33.5px] ' >  
              <p className='text-[22px] font-[500] mb-[34px] ' >Sale Report</p>
              <LineChart2/>

              <BarChart/>
             

              </div>
            </CardAdmin>
          </div>
          <div className='col-span-2' >
            <CardAdmin>
              <div className='px-[30px] py-[33.5px] ' >
                <BarChart/>
              </div>  
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