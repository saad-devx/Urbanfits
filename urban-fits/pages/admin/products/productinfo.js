import React from 'react'
import ProductInfoPage from '@/components/productinfopage'
import useProduct from '@/hooks/useProduct'
import Sidebaradmin from '../sidebar'

export default function AddProduct() {
    const { productInfo } = useProduct()
    if (!productInfo) return <Sidebaradmin>
        <main className="w-full h-[80vh] flex justify-center items-center">
            <h1 className="text-2xl text-center font_futura">No Product to Show here</h1>
        </main>
    </Sidebaradmin>
    return <ProductInfoPage
        product={productInfo}
    />
}