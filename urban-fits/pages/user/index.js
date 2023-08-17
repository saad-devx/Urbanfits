import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useUser from '@/hooks/useUser'
import Error403 from '@/pages/403';
import Logout from '@/components/modals/logout'
import Link from 'next/link'
import uploadImage from '@/utils/uploadImage'
import Button from '@/components/buttons/simple_btn'
import ifExists from '@/utils/if_exists'
// image imports
import Image from 'next/image';
import Spinner from '@/components/loaders/spinner'
const DefaultPfp = 'https://urban-fits.s3.eu-north-1.amazonaws.com/website-copyrights/default-pfp.jpg'
// Icons imports
import {
    AccountIcon,
    AddressIcon,
    EmailIcon,
    HeartShopListIcon,
    LogoutIcon,
    OrderPackageIcon,
    PackageBagIcon,
    SettingIcon,
    UfPointsIcon
} from "@/public/accountIcons"


const Option = (props) => {
    const router = useRouter()
    const route = router.pathname
    return <Link href={props.href} className={`w-full py-5 flex justify-between items-center border-b px-4 ${route === props.href ? 'bg-gray-100' : 'bg-white'} transition-all overflow-hidden`}>
        <span className={`${route === props.href ? 'opacity-100' : 'opacity-70'} flex items-center gap-x-3`}>
            {props.icon}
            {props.children}
        </span>
        <i className="arrow material-symbols-outlined text-lg text-gray-600 transition-all">chevron_right</i>
    </Link>
}

export default function User(props) {
    const { user, updateUser } = useUser()
    const [imgSpinner, SetImgSpinner] = useState(null)
    const [logout, setLogout] = useState(false)

    //state and function for the file selection
    const getPfp = () => {
        if (!user) return
        if (user.image) return user.image
        else return DefaultPfp
    }

    const [photo, setPhoto] = useState(getPfp)
    const onFileChange = async (e) => {
        const file = e.target.files[0]
        SetImgSpinner(<Spinner />)
        const imgUrl = await uploadImage(file, user._id, 'user-profiles/')
        setPhoto(imgUrl)
        await updateUser({ image: imgUrl })
        SetImgSpinner(null)
    }
    if (!user) return <Error403 />
    return <main className={`bg-gray-50 w-full md:px-7 lg:px-14 xl:px-20 py-16 flex justify-between font_urbanist`}>
        <Logout show={logout} setLogout={setLogout} />
        <div className="w-1/4 min-h-screen hidden lg:block">
            <div className="flex flex-col sticky left-0 top-20 items-center w-[280px] rounded-lg list-none font_urbanist overflow-hidden">
                <Option icon={<AccountIcon />} href='/user/myaccount'>My Account</Option>
                <Option icon={<UfPointsIcon />} href='/user/my-uf-wallet'>My UF-Wallet</Option>
                <Option icon={<EmailIcon />} href='/user/email&password'>Email & Password</Option>
                <Option icon={<SettingIcon />} href='/user/settings'>Settings / Security</Option>
                <Option icon={<OrderPackageIcon />} href='/user/orders/orders'>My Orders</Option>
                <Option icon={<OrderPackageIcon />} href='/user/orders/returns'>My Returns</Option>
                <Option icon={<HeartShopListIcon />} href='/user/shopping-list'>My Shopping List</Option>
                <Option icon={<AddressIcon />} href='/user/address'>My Addresses</Option>
                <Option icon={<PackageBagIcon />} href='/user/orders/single-use-package-fees'>Single use package fees</Option>
                <button onClick={() => setLogout(!logout)} className="w-full py-5 flex justify-between items-center px-4 bg-white transition-all overflow-hidden">
                    <span className="opacity-70 focus:opacity-100 flex items-center gap-x-3">
                        <LogoutIcon />
                        Log Out
                    </span>
                    <i className=" arrow material-symbols-outlined text-lg text-gray-600 transition-all">chevron_right</i>
                </button>
            </div>
        </div>
        <section className='bg-white w-full lg:w-[70%] px-12 py-10 rounded-lg font_urbanist text-left overflow-x-hidden overflow-y-scroll' >
            <nav className={`${props.profileNull ? 'hidden' : null} flex flex-col`}>
                <h2 className="text-lg lg:text-2xl font_urbanist_bold mb-6">My Account</h2>
                <div className="w-3/5 md:w-auto flex items-center gap-x-3">
                    <label htmlFor='pfp' className="group relative md:w-20 aspect-square rounded-full cursor-pointer border-2 border-gray-300 overflow-hidden">
                        <span className="opacity-0 group-hover:opacity-100 text-white font_urbanist_medium text-xs cursor-pointer flex flex-col items-center gap-y-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                            <i className="fa-solid fa-camera text-white" />Upload
                        </span>
                        {imgSpinner}
                        <Image className="w-full h-full object-cover" width={150} height={150} src={photo} alt="avatar" />
                    </label>
                    <input type="file" id='pfp' name='pfp' accept="image/*" onChange={onFileChange} className="opacity-0 w-0 h-0 appearance-none" />
                    <p className='text-sm lg:text-base'><p className="font_urbanist_medium">Welcome {ifExists(user.firstname)} !</p>Save your address details and phone number here for easy and fast in delivery process in the future.</p>
                </div>
            </nav>
            {props.children}
        </section>
    </main >
}
