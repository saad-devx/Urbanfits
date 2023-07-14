import React, { useEffect, useState } from 'react'
import toaster from '@/utils/toast_function'
import useCategories from '@/hooks/useCategories'
import DataTable from 'react-data-table-component';

import Sidebaradmin from './sidebar'
import Link from 'next/link'
import Button from '@/components/buttons/simple_btn'
import Spinner from '@/components/loaders/spinner'
import { InputText } from '@/components/InputText'
import { InputSelect } from '@/components/InputSelect'
import { productCategoriesTableColumns, productCategoriesTableData } from '@/mock/tablesdata'
import { SearchIcon } from '@/public/sidebaricons/SearchIcon'
// imports for Schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '@/components/tooltip'

export default function productcategories() {
    const { categories, getCategories, createCategory, categLoading } = useCategories()
    useEffect(() => {
        return async () => {
            if (categories.length < 1) await getCategories()
        }
    }, [categories])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [query, setQuery] = useState('')

    const filteredCategories = categories.filter((item) => {
        if (query !== '') {
            const { _id, name } = item
            return name.toLowerCase().includes(query.toLowerCase()) || _id.includes(query)
        }
        else return true
    });
    const onRowSelect = (state) => {
        setSelectedCategories(state.selectedRows);
        console.log(selectedCategories)
    };

    const validatedSchema = Yup.object({
        name: Yup.string().max(35, "Category name should not exceed 35 chars").required("Please enter a category name"),
        slug: Yup.string().required("Slug is mandatory"),
        parent: Yup.string().nullable(),
        description: Yup.string().max(300, 'description can be a maximum of 300 characters')
    })

    const { values, touched, handleBlur, handleChange, handleSubmit, handleReset, errors, setValues } = useFormik({
        initialValues: { name: '', slug: '', parent: 'Select Parent', description: '' },
        validationSchema: validatedSchema,
        onSubmit: (values) => {
            console.log("these are the categories", selectedCategories)
            console.log(values)
        }
    })
    console.log(categories, errors)

    return (
        <Sidebaradmin>
            <div className="flex mt-[15px] justify-between items-center">
                <div>
                    <div className="font_futura">
                        <p className="not-italic text-[22px] font-medium text-black">
                            Categories
                        </p>
                    </div>
                    <div className="flex items-center mt-4 font_futura text-sm gap-x-3">
                        <Link href="/admin"
                        >Home</Link> <i className="fa-solid fa-chevron-right" />
                        <Link href="/admin/categories" >Categories</Link>
                    </div>
                </div>
                <div>
                    <div className='w-64 h-10 py-2 px-5 gap-2 flex items-center bg-gray-50 border border-gray-300 rounded-full' >
                        <SearchIcon />
                        <input
                            type="text"
                            id="search"
                            value={query}
                            onChange={(e) => { setQuery(e.target.value) }}
                            className="w-full h-4 flex items-center text-sm font-[400] font_futuralt bg-transparent outline-none"
                            placeholder="Search (ID or Name)..."
                        />
                    </div>
                </div>
            </div>

            <section className='w-full mt-5 min-h-[30vh] bg-white rounded-2xl card_boxshadow'>
                {!categories || categLoading ? <div className='w-full mt-10 flex justify-center items-center' >
                    <Spinner forBtn={true} variant="border-black mt-10" />
                </div>
                    :
                    <div className='w-full p-8 flex gap-12'>
                        <form onSubmit={handleSubmit} onReset={handleReset} className='w-1/5 flex flex-col gap-8'>
                            <InputText
                                label="Name"
                                placeholder="Category name"
                                name="productname"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.name && touched.name ? (errors.name) : null}
                            />
                            <InputText
                                label="Slug"
                                placeholder=""
                                name="productname"
                                value={values.slug}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.slug && touched.slug ? (errors.slug) : null}
                            />
                            <InputSelect
                                label="Parent"
                                name="parent"
                                defaultValue="Select Parent"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                formikValues={values}
                                options={[{ id: null, path: "Select Parent" }, ...categories?.map((cat) => ({ id: cat._id, path: cat.path }))]}
                            />
                            <div className="relative w-full data_field items-center">
                                <h2 className="mb-2 font_futura text-sm text-left">Description</h2>
                                {touched.description && errors.description ? <Tooltip classes="form-error" content={errors.description} /> : null}
                                <textarea rows={5} className="w-full p-2 bg-transparent outline-none border rounded-md border-gray-300 focus:border-yellow-700 hover:border-yellow-600 transition" type="text" value={values.description} name="description" id="description" maxLength={1000} onBlur={handleBlur} onChange={handleChange} placeholder="" />
                            </div>
                            <Button type="submit" classes="w-full" my="my-0" >
                                Create Category
                            </Button>
                        </form>
                        <div className='w-4/5 overflow-hidden'>
                            <DataTable
                                className='scrollbar_x'
                                responsive={true}
                                customStyles={{
                                    tableWrapper: {
                                        style: {
                                            width: "97%",
                                            display: 'block',
                                            overflowY: 'visible',
                                            paddingBottom: "6rem"
                                        }
                                    }
                                }}
                                columns={productCategoriesTableColumns}
                                pagination
                                highlightOnHover
                                selectableRows
                                onSelectedRowsChange={onRowSelect}
                                sortIcon={<span className="datatable-sort-icon">&uarr;&darr;</span>}
                                data={filteredCategories.map((cat, index) => {
                                    return {
                                        id: cat._id,
                                        name: cat.name,
                                        description: cat.description,
                                        slug: cat.slug,
                                        order: (index + 1),
                                        actions: [
                                            {
                                                onClick: () => {
                                                    if (cat.parent) return setValues({ ...cat, parent: cat.parent.id })
                                                    else return setValues({ ...cat, parent: null })
                                                }, name: "Edit"
                                            },
                                            { onClick: () => { navigator.clipboard.writeText(cat._id) }, name: "Copy ID" },
                                            { onClick: null, name: "Delete" }
                                        ]
                                    }
                                })}
                            />
                        </div>
                    </div>}
            </section>
        </Sidebaradmin>
    )
}