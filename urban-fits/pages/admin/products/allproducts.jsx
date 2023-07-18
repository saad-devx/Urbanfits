import React, { useEffect, useState } from 'react'
import Sidebaradmin from "../sidebar";
import GenericTable1 from "@/components/GenericTables/GenericTable1";
import CardAdmin from "@/components/cards/cardadmin";
import Spinner from '@/components/loaders/spinner';
import Image from 'next/image';
import Button from "@/components/buttons/simple_btn";
import ActionButton from '@/components/buttons/ActionButton';
import Link from 'next/link';
import useCategories from '@/hooks/useCategories';
import useProduct from '@/hooks/useProduct';
import { productListTableColumns, productListTableData } from '@/mock/tablesdata';

export default function allproducts() {
  const { categories, getCategories, categLoading } = useCategories()
  const { products, getProducts, productLoading } = useProduct()
  const [categoryOption, setCategoryOption] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (categories.length !== 0 && products.length !== 0) return
    setLoading(true)
    if (categories.length === 0) getCategories()
    if (products.length === 0) getProducts()
    return setLoading(false)
  }, [])

  const onCategoryChange = async (e) => {
    const { value } = e.target
    console.log(value, typeof (value))
    setCategoryOption(value)
    setLoading(true)
    if (value == "false") await getProducts()
    if (value && value.length > 8) await getProducts(value)
    return setLoading(false)
  }

  return (
    <Sidebaradmin>
      <div className="flex mt-[15px] justify-between items-center ">
        <div>
          <div className="font_futura">
            <p className="not-italic text-[22px]  font-medium text-black">
              Product List
            </p>
          </div>
          <div className="flex items-center mt-4 font_futura text-sm gap-x-3">
            <Link href="/admin" >Home</Link> <i className="fa-solid fa-chevron-right" />
            <span >Products</span> <i className="fa-solid fa-chevron-right" />
            <Link href="/admin/alproducts">Product List</Link>
          </div>
        </div>
        <div>
          <Link href="/admin/products/addproduct" >
            <Button my="my-[0px]">Add Product</Button>
          </Link>
        </div>
      </div>

      <CardAdmin classes="px-10 py-[42px] mt-[20px] ">
        <div className="grid grid-cols-1">
          {loading || !categories || productLoading ? <div className='w-full flex justify-center items-center' ><Spinner forBtn={true} variant="border-black" /></div>
            : <GenericTable1
              border={true}
              columns={productListTableColumns}
              categoryOption={categoryOption}
              data={products?.map(product => {
                return {
                  product: <span className='w-12 aspect-square rounded-lg overflow-hidden' ><Image className='w-full h-full object-cover' width={50} height={50} alt="product image" src={product.cover_image} /></span>,
                  name: product.name,
                  price: `$ ${product.price}`,
                  offer: "0% off",
                  purchased: "0",
                  stock: (() => {
                    let stock = 0;
                    product.variants.forEach(variant => {
                      stock += variant.stock
                    });
                    return stock
                  })(),
                  status: "Active",
                  date: "2021-10-30",
                  action: <ActionButton />
                }
              })}
              onCategoryChange={onCategoryChange}
              options={[{ _id: false, path: "All Products" }, ...categories]?.map((category) => {
                return { value: category._id, name: category.path }
              })} />}
        </div>
      </CardAdmin>
    </Sidebaradmin>
  )
}