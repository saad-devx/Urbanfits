import React, { useEffect, useState } from 'react'
import Sidebaradmin from "../sidebar";
import CardAdmin from "@/components/cards/cardadmin";
import Spinner from '@/components/loaders/spinner';
import Button from "@/components/buttons/simple_btn";
import { useRouter } from 'next/router';
import Link from 'next/link';
import useProduct from '@/hooks/useProduct';

export default function CreateBundles() {
    const router = useRouter()
    const { products, getProducts, productLoading, totalProducts, DeleteProducts, selectedProducts, setSelectedProducts } = useProduct()


    return (
        <Sidebaradmin>
            <div className="flex mt-[15px] justify-between items-center ">
                <div>
                    <h2 className="font_futura text-[22px]">Create Bundle</h2>
                    <div className="flex items-center mt-4 font_futura text-sm gap-x-3">
                        <Link href="/admin">Home</Link> <i className="fa-solid fa-chevron-right" />
                        <span >Products</span> <i className="fa-solid fa-chevron-right" />
                        <Link href="/admin/addbundle">Create Bundle</Link>
                    </div>
                </div>
                <Link href="/admin/products/allproducts" ><Button my="my-0">All Products</Button></Link>
            </div>

            <CardAdmin classes="px-8 py-10 mt-5">
            </CardAdmin>
        </Sidebaradmin>
    )
}