import React, { useEffect, useState } from 'react'
import User from '..';
import Shoppingcard from '@/components/cards/shoppingcard';
import axios from 'axios';
import Head from 'next/head';
import mongoose from 'mongoose';

export default function Product({ shoppinglist }) {
    const [products, setProducts] = useState(shoppinglist.products)
    return <>
        <Head><title className='capitalize' >{`${shoppinglist.name} - Urban Fits`}</title></Head>
        <User>
            <section className="w-full mt-10 grid grid-cols-2 gap-10">
                {products && products.length ? products.map((product, index) => {
                    return <Shoppingcard product={product} />
                }) : null}
            </section>
        </User>
    </>
}
export async function getServerSideProps(context) {
    const { list_id } = await context.query
    if (!mongoose.Types.ObjectId.isValid(list_id)) return {
        redirect: {
            destination: '/404',
            permanent: false,
        },
    };
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/user/shopping-list/populate-list?list_id=${list_id}`)
        return { props: { shoppinglist: data.shoppinglist } }
    }
    catch (error) {
        console.error(error);
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        };
    }
}