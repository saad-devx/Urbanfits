import React, { useState } from 'react'
import Sidebaradmin from '../sidebar'
import Button from '@/components/buttons/simple_btn'
import CardAdmin from '@/components/cards/cardadmin'
import { InputText } from '@/components/InputText'
import { InputSelect } from '@/components/InputSelect'
// import InputTextArea from '@/components/InputTextArea'
import DefaultOrPic from '@/components/default_or_pic'
import Link from 'next/link'
import { useFormik } from 'formik'
import { addProductSchema } from '@/mock/yupSchemas'

export default function addproduct() {

    const colors = ["#EA3838", "#4B9C19", "#3532AA", "#BC26B6", "#E1A822", "#000000", "#D97133"]

    const [newtag, setNewtag] = useState();

    const [selectedColor, setSelectedcolor] = useState("");

    const [tags, setTags] = useState([]);
    const addnewtag = () => {
        if (tags.length <= 4) {
            setTags([...tags, newtag]);
        }
        setNewtag("");
    }

    const onCheck = (e) => {
        if (e.target.checked) {
            setFieldValue('sizes', [
                ...values.sizes,
                e.target.value
            ]);
        } else {
            setFieldValue(
                'sizes', values.sizes.filter((size) => size !== e.target.value)
            );
        }
    }

    const handletagdelete = (tag) => {
        setTags(tags.filter((e) => {
            return e !== tag
        }))
    }

    const [picurlcover, setpicurlcover] = useState(null);
    const [picurl1, setPicurl1] = useState(null);
    const [picurl2, setPicurl2] = useState(null);
    const [picurl3, setPicurl3] = useState(null);
    const [picurl4, setPicurl4] = useState(null);
    const [picurl5, setPicurl5] = useState(null);
    const [picurl6, setPicurl6] = useState(null);

    const onFileChange = (e) => {
        const name = e.target.name
        const file = e.target.files[0];
        if (name == "cover-image") return setpicurlcover(URL.createObjectURL(file))
        if (name == "pic1") return setPicurl1(URL.createObjectURL(file))
        if (name == "pic2") return setPicurl2(URL.createObjectURL(file))
        if (name == "pic3") return setPicurl3(URL.createObjectURL(file))
        if (name == "pic4") return setPicurl4(URL.createObjectURL(file))
        if (name == "pic5") return setPicurl5(URL.createObjectURL(file))
        if (name == "pic6") return setPicurl6(URL.createObjectURL(file))
    }

    const initialValues = {
        productname: "",
        category: "",
        slug: "",
        description: "",
        sizes: [],
        color: "",
        price: "",
        quantity: "",
        seotitle: "",
        seodescription: "",
        width: "",
        height: "",
        weight: "",
        shippingfees: "",
        seometakeyword: ""
    }


    const { values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldValue, setValues } = useFormik({
        initialValues: initialValues,
        validationSchema: addProductSchema,
        onSubmit: (values, error) => {
            console.log(values, error)
        },
    })


    const [variants, setVariants] = useState([]);

    const finalProduct = {
        "name": values.productname,
        "price": values.price,
        "description": values.description,
        "category": values.category,
        "slug": values.slug,
        "cover_image": picurlcover,
        "tags": tags,
        "ratings": 0,
        "seo_detials": {
            "title": values.seotitle,
            "description": values.seodescription,
            "meta_keywords": values.seometakeyword
        },
        "shipping_detials": {
            "width": String(values.width),
            //   "height": String(values.),
            "weight": String(values.height),
            "fees": values.shippingfees
        },
        "variants": variants
    }


    const addVariant = () => {
        const newvariant =
        {
            "color": selectedColor,
            "color_name": "red",
            "images": [
                "https://i.etsystatic.com/6920740/r/il/574a03/3912644169/il_1140xN.3912644169_hz8i.jpg",
                "https://i.etsystatic.com/6920740/r/il/6d3dde/3912644185/il_1140xN.3912644185_7ya6.jpg"
            ],
            "size": [],
            "stock": values.quantity
        }

        if (values?.quantity) {
            setVariants([...variants, newvariant])
            console.log(values)
        }
        // values

    }

    // const onSubmit = () =>{
    //     console.log(finalProduct)
    // }



    return (
        <Sidebaradmin>
            <div className="flex mt-[15px] justify-between items-center ">
                <div>
                    <div className="font_futura text-[22px] font-medium">
                        Add Product
                    </div>
                    <div className="flex items-center mt-4 font_futura text-sm gap-x-3">
                        Home <i className="fa-solid fa-chevron-right" />
                        Products <i className="fa-solid fa-chevron-right" />
                        Add Products
                    </div>
                </div>
                {/*  */}
                <div>
                    <Link href="/admin/products/allproducts" >
                        <Button my="my-[0px]">View All</Button>
                    </Link>
                </div>
                {/*  */}
            </div>

            <CardAdmin classes="mt-[20px] " >

                <div  >
                    <p className='px-[60px]  pt-[30px] mb-[12px] text-[24px] font-[400] ' >
                        Add Product
                    </p>
                    <div className='px-[30px] mb-[30px]' >
                        <hr />
                    </div>

                    <div className='px-[50px] grid grid-cols-2 gap-[20px] ' >
                        <section>
                            <div className=' w-[413px] h-[377px] border-[1px] flex items-center justify-center border-[#DADADA] rounded-[15px] relative ' >
                                <div className='absolute top-5 right-7 ' >
                                    <label className='cursor-pointer' htmlFor="filebtn" ><i className="fa-solid fa-pen-to-square" /></label>
                                    <input name='cover-image' onChange={onFileChange} type="file" id="filebtn" className='w-[0px]' />
                                </div>
                                <div className='w-[393px] h-[357.42px] overflow-hidden rounded-[15px]' >
                                    <DefaultOrPic mega src={picurlcover} />
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-[26px] mt-[10px]' >
                                {[picurl1, picurl2, picurl3, picurl4, picurl5, picurl6].map((imgUrl, index) => {
                                    let i = index + 1
                                    return <>
                                        <div key={index} className='flex flex-col gap-[10px]' >
                                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center border-[#DADADA] rounded-[15px] relative' >

                                                <div className='absolute top-3 right-5 ' >
                                                    <label className='cursor-pointer' htmlFor={`filebtn${i}`} ><i className="fa-solid fa-pen-to-square text-sm" /></label>
                                                    <input name={`pic${i}`} onChange={onFileChange} type="file" id={`filebtn${i}`} className='w-[0px]' />
                                                </div>
                                                <div className='w-[100px] h-[92px] overflow-hidden rounded-[15px]' >
                                                    <DefaultOrPic src={imgUrl} />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })}
                            </div>
                        </section>
                        <section className='flex flex-col gap-[20px]' >
                            <div className='grid grid-cols-2 gap-[17px]' >
                                <InputText
                                    label="Product Name"
                                    placeholder="&nbsp;"
                                    name="productname"
                                    value={values.productname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.productname && touched.productname ?
                                        (errors.productname) : null
                                    }
                                />
                                <InputSelect
                                    label="Select Categories"
                                    options={["men/t-shirt", "men/pant", "women/longdress"]}
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.category && touched.category ?
                                        (errors.category) : null
                                    }
                                />
                            </div>
                            <InputText
                                label="Slug"
                                placeholder="&nbsp;"
                                name="slug"
                                value={values.slug}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.slug && touched.slug ?
                                    (errors.slug) : null
                                }
                            />
                            <InputText
                                label="Description"
                                h="h-[84px]"
                                placeholder="&nbsp;"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.description && touched.description ?
                                    (errors.description) : null
                                }
                            />
                            <div className='grid grid-cols-2 gap-[17px]' >
                                <div className='flex flex-col gap-5 ' >
                                    <p className='text-[16px]' >Color</p>
                                    <div className='flex items-center' >
                                        {colors.map((color, i) => {
                                            return <>
                                                <label htmlFor={color} key={color} style={{ backgroundColor: color, transform: "scale(1.1)", border: values.color == color ? "2px solid #d6d6d6" : "none" }} className='w-5 h-5 mr-[5px] cursor-pointer rounded-full transition-all'></label>
                                                <input id={color} type='radio' onChange={(e) => { handleChange(e); console.log(values) }} key={i} name="color" value={color} className="appearance-none !w-0 !h-0 !border-none opacity-0" />
                                            </>
                                        })}
                                        <p className='text-[10px] relative' >
                                            <input type="color" name="color" className='absolute opacity-0 top-[-6px] left-[-3px] cursor-pointer' value={values.color} onChange={handleChange} />
                                            Custom
                                        </p>
                                        <div style={{ backgroundColor: values.color, border: "2px solid #d6d6d6" }} className='cursor-pointer w-5 h-5 ml-1 rounded-full' />
                                    </div>
                                    <InputText
                                        label="Price (In USD)"
                                        placeholder="&nbsp;"
                                        type="number"
                                        name="price"
                                        value={values.price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.price && touched.price ?
                                            (errors.price) : null
                                        }
                                    />
                                </div>
                                <div className='flex flex-col gap-[20px] ' >
                                    <p className='text-[16px] font-[400] ' >Size</p>
                                    <div className='flex items-center ' >
                                        {['S', 'M', 'L', 'Xl', 'XXL'].map((size, i) => {
                                            return <>
                                                <input name='sizes' id={size} value={size} onChange={onCheck} checked={values.sizes.includes(size)} type="checkbox" />
                                                <label htmlFor={size} className='text-[14px] font-[400] ml-[5px] mr-[10px] cursor-pointer'>{size}</label>
                                            </>
                                        })}
                                    </div>
                                    <InputText
                                        label="Quantity"
                                        placeholder=" "
                                        type="number"
                                        options={["1", "2", "3"]}
                                        name="quantity"
                                        value={values.quantity}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                            <InputText
                                label="Product Tag"
                                postlabel="( Type and make comma to separate Tag )"
                                placeholder="&nbsp;"
                                onChange={(e) => setNewtag(e.target.value)}
                                value={newtag}
                                onKeyUp={(event) => {
                                    if (event.key === 'Enter') {
                                        addnewtag()
                                    }
                                }}
                            />
                            <div className='' >
                                <div className='flex gap-[30px]' >
                                    {tags.map((tag, i) => (
                                        <span key={i} className='ml-[10px] flex items-center gap-[5px] ' >
                                            <p className='text-[13px] font-[300] cursor-pointer' onClick={() => handletagdelete(tag)} > x</p>
                                            <p className='text-[14px] font-[400] ' > {tag}</p>
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className='grid grid-cols-2 gap-[20px] px-[50px] py-[50px] ' >
                        <div className='flex flex-col gap-[20px]' >
                            <p className='text-[20px] font-[400] ' >SEO Details</p>
                            <InputText
                                label="SEO Title"
                                placeholder=" "
                                name="seotitle"
                                value={values.seotitle}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.seotitle && touched.seotitle ?
                                    (errors.seotitle) : null
                                }
                            />
                            <InputText
                                label="SEO Description"
                                placeholder=" "
                                name="seodescription"
                                value={values.seodescription}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.seodescription && touched.seodescription ?
                                    (errors.seodescription) : null
                                }
                            />
                            <InputText
                                label="SEO Meta Keywords"
                                placeholder=" "
                                name="seometakeyword"
                                value={values.seometakeyword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.seometakeyword && touched.seometakeyword ?
                                    (errors.seometakeyword) : null
                                }
                            />
                        </div>
                        <div className='flex flex-col gap-[20px]' >
                            <p className='text-[20px] font-[400] ' >Shipping Details</p>
                            <div className='grid grid-cols-2 gap-[48px] ' >
                                <InputText
                                    label="Width"
                                    placeholder="Inch"
                                    type="number"
                                    name="width"
                                    value={values.width}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.width && touched.width ?
                                        (errors.width) : null
                                    }
                                />
                                <InputText
                                    label="Height"
                                    placeholder="Inch"
                                    type="number"
                                    name="height"
                                    value={values.height}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.height && touched.height ?
                                        (errors.height) : null
                                    }
                                />
                            </div>
                            <InputText
                                label="Weight"
                                type="number"
                                placeholder="gram"
                                name="weight"
                                value={values.weight}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.weight && touched.weight ?
                                    (errors.weight) : null
                                }

                            />
                            <InputText
                                label="Shipping Fees"
                                placeholder="$"
                                type="number"
                                name="shippingfees"
                                value={values.shippingfees}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.shippingfees && touched.shippingfees ?
                                    (errors.shippingfees) : null
                                }
                            />
                            <div className='flex justify-end gap-[10px] ' >
                                <Button onClick={addVariant} classes=" my-[0px] " >
                                    Add Variant
                                </Button>
                                <Button disabled={variants.length == 0 ? true : false} onClick={handleSubmit} classes=" my-[0px] " >
                                    Publish
                                </Button>
                            </div>
                        </div>

                    </div>

                </div>
            </CardAdmin>
        </Sidebaradmin>
    )
}