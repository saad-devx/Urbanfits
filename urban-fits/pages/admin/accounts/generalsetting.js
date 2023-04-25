import React from 'react'
import Sidebaradmin from '../sidebar'

const generalsetting = () => {
    return (
        <Sidebaradmin>
            <div className='container items-start pt-[40px] px-[40px] pb-[60px]  h-[787] bg-white rounded-[25px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] '>

                <div className=''>
                    <p>Store Address</p>
                    <p>This is where your business is located. Tax rates and shipping rates will use this address.</p>
                    <div className='flex flex-row'>
                        <label>Address Line 1</label>
                        <br/>
                        <input className='border-2' type='text'></input>

                        <label>Address Line 2</label><br/>
                        <input className='border-2' type="text"></input>
                    </div>
                    <div className=''>
                        <label>City</label>
                        <input className='border-2' type='text'></input>

                        <label>Country / State</label>
                        <input className='border-2' type='text'></input>
                    </div>
                    <div>
                        <label>Postal Code / ZIP</label>
                        <input className='border-2' type='text'></input>
                    </div>
                </div>
                <div>
                    <p>Selling Options</p>
                    <div className='flex flex-row'>
                        <label>Selling Location</label>
                        <input className='border-2' type='text'></input>

                        <label>Shipping Location</label>
                        <input className='border-2' type="text"></input>
                    </div>
                    <div>
                        <label>Default Customer Location</label>
                        <input className='border-2' type='text'></input>
                    </div>
                </div>
                <div>
                    <div className='flex flex-row'>
                        <p>Enable Taxes</p>
                        <input className='' type='checkbox' />
                        <label>Enable Tax rates and calculations Rates will be configurable and taxes will be calculated during checkout.</label>
                    </div>
                    <div className="flex flex-row">
                        <p>Enable Coupons</p>
                        <input className='' type='checkbox' />
                        <label>Enable the use of Coupon codes Coupons can be applied from the cart and checkout pages.</label>
                        <input className='' type='checkbox' />
                        <label>Calculate coupon discount sequentially When applying multiple coupons, apply the first coupon to the full price and second coupon to the discounted price and so on.</label>
                    </div>
                </div>
                <div>
                    <p>Currency Options</p>
                    <p>The following option affects how prices are displayed on the front-end.</p>
                    <div className='flex flex-row'>
                        <label>Currency</label>
                        <input className='border-2' type='text'></input>

                        <label>Currency Position</label>
                        <input className='border-2' type="text"></input>
                    </div>
                    <div className='flex flex-row'>
                        <label>Thousand Separator</label>
                        <input className='border-2' type='text'></input>

                        <label>Decimal Separator</label>
                        <input className='border-2' type='text'></input>

                        <label>Number of Decimals</label>
                        <input className='border-2' type="text"></input>
                    </div>

                </div>
                <div>
                    <p>Measurements</p>
                    <label>Weight unit</label>
                    <input className='border-2' type='text'></input>

                    <label>Dimension unit</label>
                    <input className='border-2' type="text"></input>

                </div>
                <div >
                    <p>Review</p>
                    <div >
                        <p>Enable Reviews</p>
                        <input className='' type='checkbox' />
                        <label>Enable product reviews</label>
                        <input className='' type='checkbox' />
                        <label>Show “verified owner” label on customer reviews</label>
                    </div>
                    <div >
                        <p>Product Ratings</p>
                        <input className='' type='checkbox' />
                        <label>Enable star rating on reviews</label>
                        <input className='' type='checkbox' />
                        <label>Star rating should be required</label>
                    </div>
                </div>

            </div>

        </Sidebaradmin>
    )
}

export default generalsetting