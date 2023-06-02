import React,{useState} from 'react'
import Sidebaradmin from '../sidebar'
import { RightArrowIcon } from '@/public/sidebaricons/RightArrowIcon'
import Button from '@/components/buttons/simple_btn'
import CardAdmin from '@/components/cards/cardadmin'
import EditIcon from '@/public/icons/EditIcon'
import { InputText } from '@/components/InputText'
import { InputSelect } from '@/components/InputSelect'
import InputTextArea from '@/components/InputTextArea'
import Image from 'next/image'

import productcoverimage from '@/public/productcoverimage.png'
import productsmallimage from '@/public/productsmallimage.png'
import Link from 'next/link'
import { useFormik } from 'formik'
import { addProductSchema } from '@/mock/yupSchemas'

const addproduct = () => {

    const colors = ["#EA3838", "#4B9C19", "#3532AA", "#BC26B6", "#E1A822", "#000000", "#D97133"]

    const [newtag, setNewtag] = useState();

    const [selectedColor, setSelectedcolor] = useState("");
    const handlecolorclick = (color) =>{
        setSelectedcolor(color)
    }

    const [tags, setTags] = useState(["T-Shirt", "Mobile Phone", "T-Shirt"]);
    const addnewtag = () =>{
            if(tags.length <= 4 ){ 
            setTags([...tags, newtag]);
        }
        setNewtag("");
    }

    const  [sizeS, setsizeS] = useState({checked:false, value:"S"});
    const  [sizeM, setsizeM] = useState({checked:false, value:"M"});
    const  [sizeL, setsizeL] = useState({checked:false, value:"L"});
    const  [sizeXL, setsizeXL] = useState({checked:false, value:"XL"});
    const  [sizeXXL, setsizeXXL] = useState({checked:false, value:"XXL"});

    const [sizes, setSizes] = useState([]);

    const handleSizes = (setsizep, sizep, sip) =>{
        // setsizep({checked:!sizep, vlaue:sip});
        if(sip == "S"){
            setsizeS({checked:true, value:"S"})
        }else if(sip == "M"){
            setsizeS({checked:true, value:"M"})
        }else if(sip == "L"){
            setsizeS({checked:true, value:"L"})
        }else if(sip == "XL"){
            setsizeS({checked:true, value:"XL"})
        }

        let sizesArr=[sizeS, sizeM, sizeL, sizeM, sizeXL, sizeXXL];
        let  temp = [];
        sizesArr.forEach(size => {
            if(size.checked == true){
                temp.push(size.value)
            }
        });
        setSizes(temp);
        console.log(sizes,"--<sizes")

    }

    const handletagdelete = (tag) =>{
        setTags(tags.filter((e) => {
            return e !== tag
          }))
    }
    
    const [picurlcover, setpicurlcover] = React.useState(productcoverimage);
    const [picurl1, setPicurl1] = React.useState( productsmallimage);
    const [picurl2, setPicurl2] = React.useState( productsmallimage);
    const [picurl3, setPicurl3] = React.useState( productsmallimage);
    const [picurl4, setPicurl4] = React.useState( productsmallimage);
    const [picurl5, setPicurl5] = React.useState( productsmallimage);
    const [picurl6, setPicurl6] = React.useState( productsmallimage);

    const handleprofilepiccover = (e) =>{
      
      if( e.target.files){
        setpicurlcover(URL.createObjectURL(e.target.files[0]))
      } 
  
    }




const initialValues = {
    productname: "",
    category: "",
    slug: "",
    description: "",
    color: selectedColor,
    price: "",
    quantity: "", 
    seotitle: "",
    seodescription: "",
    width: "",
    height:"",
    weight:"",
    shippingfees:"",
    seometakeyword:""
    }
       


const {values, errors, handleBlur, handleChange, handleSubmit, touched,  } = useFormik({
    initialValues:initialValues  , 
    validationSchema: addProductSchema,
    onSubmit: ()=>{

    },
})


const [variants, setVariants] = useState([]);

const finalProduct={
    "name": values.productname,
    "price": values.price,
    "description": values.description ,
    "category": values.category,
    "slug": values.slug,
    "cover_image": {
      "public_id": "1",
      "url": picurlcover
    },
    "tags": tags,
    "ratings": 0,
    "seo_detials": {
      "title": values.seotitle,
      "description": values.seodescription ,
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
 
    
const addVariant = () =>{
    const newvariant =   
    {
          "color": selectedColor,
          "color_name": "red",
          "images": [
            {
              "public_id": "1",
              "url": "https://i.etsystatic.com/6920740/r/il/574a03/3912644169/il_1140xN.3912644169_hz8i.jpg"
            },
            {
              "public_id": "2",
              "url": "https://i.etsystatic.com/6920740/r/il/6d3dde/3912644185/il_1140xN.3912644185_7ya6.jpg"
            }
          ],
          "size": sizes,
          "stock": values.quantity
        }

        if(values?.quantity){
        setVariants([...variants,newvariant ])
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
        <div className="font_futura">
          <p className="not-italic text-[22px]  font-medium text-black">
            Add Product 
          </p>
        </div>
        <div className=" flex items-center mt-[15px] ">
          <li className="  not-italic text-[14px] text-center font-medium text-black list-none">
            Home
          </li>
          <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
            <RightArrowIcon />
          </li>
          <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
            Products
          </li>
          <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
            <RightArrowIcon /> 
          </li>
          <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
            Add Products 
          </li>
        </div>
      </div>
      {/*  */}
      <div>
        <Link href="/admin/products/allproducts" > 
          <Button my="my-[0px]"> View All</Button>
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
                <hr  />
            </div>
            
            <div className='px-[50px] grid grid-cols-2 gap-[20px] ' >
                <section>
                    <div className=' w-[413px] h-[377px] border-[1px] flex items-center justify-center 
                     border-[#DADADA] rounded-[15px] relative ' >
                        {/* <div className='p-[22px] w-[393px] h-[357px] bg-[#F4F4F4] rounded-[15px]  ' >
                            <div className=' float-right '  >
                                <EditIcon/>
                            </div>
                            <p className='text-[30px] font-[700] text-center mt-[106px] ' >765 X 850</p>
                            <p className='text-[20px] font-[500] text-center mt-[50px] ' >
                            Please choose image according to the expected ratio</p>


                        </div> */}
                        <div className='absolute top-[29px] right-[28px] ' > 
                        <label className='cursor-pointer  '  for="filebtn" ><EditIcon/></label>
                            <input  onChange={handleprofilepiccover}
                            type="file" id="filebtn" className='w-[0px]'  />
                             
                        </div>
                        <div className='w-[393px] h-[357.42px]  overflow-hidden rounded-[15px]  ' >
                        <Image alt='image' width={393} height={357.42} src={picurlcover} />
                        </div>
                    </div>
                    <div className=' flex gap-[26px] mt-[10px]' >
                        <div className=' flex flex-col gap-[10px]' >
                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px]  relative ' >
                            
                            <div className='absolute top-[29px] right-[28px] ' > 
                        <label className='cursor-pointer  '  for="filebtn1" ><EditIcon/></label>
                            <input  onChange={(e) =>{
                                 if( e.target.files){
                                    setPicurl1(  URL.createObjectURL(e.target.files[0]))
                                  } 
                            } 
                        }
                            type="file" id="filebtn1" className='w-[0px]'  />
                        </div>
                            <div className='w-[100px] h-[92px]  overflow-hidden rounded-[15px]  ' >
                        <Image alt='image' width={100} height={92} src={picurl1} />
                        </div>
                            </div>

                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px]  relative ' >
                            
                            <div className='absolute top-[29px] right-[28px] ' > 
                        <label className='cursor-pointer  '  for="filebtn2" ><EditIcon/></label>
                            <input  onChange={(e) =>{
                                 if( e.target.files){
                                    setPicurl2(  URL.createObjectURL(e.target.files[0]))
                                  } 
                            } 
                        }
                            type="file" id="filebtn2" className='w-[0px]'  />
                        </div>
                            <div className='w-[100px] h-[92px]  overflow-hidden rounded-[15px]  ' >
                        <Image alt='image' width={100} height={92} src={picurl2} />
                        </div>
                            </div>
                          
                        </div>
                        <div className=' flex flex-col gap-[10px]' >
                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px]  relative ' >
                            
                            <div className='absolute top-[29px] right-[28px] ' > 
                        <label className='cursor-pointer  '  for="filebtn3" ><EditIcon/></label>
                            <input  onChange={(e) =>{
                                 if( e.target.files){
                                    setPicurl3(  URL.createObjectURL(e.target.files[0]))
                                  } 
                            } 
                        }
                            type="file" id="filebtn3" className='w-[0px]'  />
                        </div>
                            <div className='w-[100px] h-[92px]  overflow-hidden rounded-[15px]  ' >
                        <Image alt='image' width={100} height={92} src={picurl3} />
                        </div>
                            </div>

                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px]  relative ' >
                            
                            <div className='absolute top-[29px] right-[28px] ' > 
                        <label className='cursor-pointer  '  for="filebtn4" ><EditIcon/></label>
                            <input  onChange={(e) =>{
                                 if( e.target.files){
                                    setPicurl4(  URL.createObjectURL(e.target.files[0]))
                                  } 
                            } 
                        }
                            type="file" id="filebtn4" className='w-[0px]'  />
                        </div>
                            <div className='w-[100px] h-[92px]  overflow-hidden rounded-[15px]  ' >
                        <Image alt='image' width={100} height={92} src={picurl4} />
                        </div>
                            </div>
                          
                        </div>
                        <div className=' flex flex-col gap-[10px]' >
                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px]  relative ' >
                            
                            <div className='absolute top-[29px] right-[28px] ' > 
                        <label className='cursor-pointer  '  for="filebtn5" ><EditIcon/></label>
                            <input  onChange={(e) =>{
                                 if( e.target.files){
                                    setPicurl5(  URL.createObjectURL(e.target.files[0]))
                                  } 
                            } 
                        }
                            type="file" id="filebtn5" className='w-[0px]'  />
                        </div>
                            <div className='w-[100px] h-[92px]  overflow-hidden rounded-[15px]  ' >
                        <Image alt='image' width={100} height={92} src={picurl5} />
                        </div>
                            </div>

                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px]  relative ' >
                            
                            <div className='absolute top-[29px] right-[28px] ' > 
                        <label className='cursor-pointer  '  for="filebtn6" ><EditIcon/></label>
                            <input  onChange={(e) =>{
                                 if( e.target.files){
                                    setPicurl6(  URL.createObjectURL(e.target.files[0]))
                                  } 
                            } 
                        }
                            type="file" id="filebtn6" className='w-[0px]'  />
                        </div>
                            <div className='w-[100px] h-[92px]  overflow-hidden rounded-[15px]  ' >
                        <Image alt='image' width={100} height={92} src={picurl6} />
                        </div>
                            </div>
                          
                        </div>
                       
                    </div>
                </section>
                <section className=' flex flex-col gap-[20px]' >
                    <div className='grid grid-cols-2 gap-[17px]' >
                        <InputText
                        label="Product Name"
                        placeholder="&nbsp;"
                        name="productname"
                        value={values.productname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.productname && touched.productname?
                            (errors.productname): null
                        }

                        />
                        <InputSelect
                        label="Select Categories"
                        options={["men/t-shirt","men/pant","women/longdress"]}
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.category && touched.category?
                            (errors.category): null
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
                        error={errors.slug && touched.slug?
                            (errors.slug): null
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
                        error={errors.description && touched.description?
                            (errors.description): null
                        }


                    />
                    <div className='grid grid-cols-2 gap-[17px]' >
                        <div className='flex flex-col gap-[20px] ' >
                            {/* <input className='rounded-[50px]  w-[50px] opacity-5'
                            type="color" name="" id="" /> */}
                            <p  className='text-[16px] font-[400] ' >Color</p>
                            <div className='flex gap-[5px] items-center ' >
                            {/* <div  className={` cursor-pointer
                                 w-[20px] h-[20px] bg-[${colors[0]}] rounded-[50px]
                                  `}  /> */}
                                {colors.map((color,i)=> (

                                <div  style={{backgroundColor:color}}
                                 onClick={()=> handlecolorclick(color)} className={` cursor-pointer
                                 w-[20px] h-[20px]  rounded-[50px]
                                  ${selectedColor==color && " border-[2px] border-[black] " }
                                  `}  />
                                ))}
                              

                               
                                <p className='text-[10px] font-[400] relative  ' >
                                    <input type="color" className='absolute opacity-0 top-[-6px] left-[-3px]
                                    cursor-pointer
                                    ' 
                                    value={selectedColor}
                                    onChange={(e) => setSelectedcolor(e.target.value) }
                                    />
                                    Custom</p>

                                    <div style={{backgroundColor:selectedColor}} 
                                    className='cursor-pointer 
                                    w-[20px] h-[20px]  rounded-[6px]'
                                    />

                                {/* <input type="color" name="" id="" /> */}
                            </div>
                            <InputText
                            label="Price (In USD)"
                            placeholder="&nbsp;"
                            type="number"
                            name="price"
                            value={values.pirce}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.price && touched.price?
                                (errors.price): null
                            }
    
                            />
                        </div>
                        <div className='flex flex-col gap-[20px] ' >
                        <p  className='text-[16px] font-[400] ' >Size</p>
                            <div className='flex items-center ' >
                                <input onClick={() =>handleSizes(setsizeS, sizeS, "S")} type="checkbox"  /> <p className='text-[14px] font-[400] ml-[5px] mr-[10px] ' >S</p>
                                <input onClick={() =>handleSizes(setsizeM, sizeM, "M")} type="checkbox" /> <p className='text-[14px] font-[400] ml-[5px] mr-[10px]' >M</p>
                                <input onClick={() =>handleSizes(setsizeL, sizeL, "L")} type="checkbox" /> <p className='text-[14px] font-[400] ml-[5px] mr-[10px]' >L</p>
                                <input onClick={() =>handleSizes(setsizeXL, sizeXL, "XL")} type="checkbox" /> <p className='text-[14px] font-[400] ml-[5px] mr-[10px]' >XL</p>
                                <input onClick={() =>handleSizes(setsizeXXL, sizeXXL, "XXL")} type="checkbox" /> <p className='text-[14px] font-[400] ml-[5px] ' >XXL</p>
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
                        onChange={(e)=> setNewtag(e.target.value)}
                        value={newtag}
                        onKeyUp={(event) => {
                            if (event.key === 'Enter') {
                              addnewtag()
                            }}}
                        
                    />
                    <div className='' >
                    <div className=' flex gap-[30px]  ' >
                        {tags.map((tag, i)=> (
                        <span className='ml-[10px] flex  items-center gap-[5px] ' >
                            <p  className='text-[13px] font-[300] cursor-pointer ' onClick={() => handletagdelete(tag)} > x</p> 
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
                    error={errors.seotitle && touched.seotitle?
                        (errors.seotitle): null
                    }
                    />
                     <InputText 
                    label="SEO Description"
                    placeholder=" "
                    name="seodescription"
                    value={values.seodescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.seodescription && touched.seodescription?
                        (errors.seodescription): null
                    }
                    />
                     <InputText 
                    label="SEO Meta Keywords"
                    placeholder=" "
                    name="seometakeyword"
                    value={values.seometakeyword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.seometakeyword && touched.seometakeyword?
                        (errors.seometakeyword): null
                    }
                    />
                </div>
                <div className='flex flex-col gap-[20px]' >
                <p className='text-[20px] font-[400] ' >Shipping Details</p>
                    <div  className='grid grid-cols-2 gap-[48px] ' >
                        <InputText 
                        label="Width"
                        placeholder="Inch"
                        type="number"
                        name="width"
                        value={values.width}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.width && touched.width?
                            (errors.width): null
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
                        error={errors.height && touched.height?
                            (errors.height): null
                        }
                        />          
                    </div>
                    <InputText 
                    label="Weight"
                    type="number"
                    placeholder="gam"
                    name="weight"
                    value={values.weight}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.weight && touched.weight?
                        (errors.weight): null
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
                    error={errors.shippingfees && touched.shippingfees?
                        (errors.shippingfees): null
                    }
                    />      
                    <div className='flex justify-end gap-[10px] ' >
                            <Button onClick={addVariant} classes=" my-[0px] " >
                                Add Variant
                            </Button>
                            <Button  disabled={variants.length == 0 ? true: false  }  onClick={  handleSubmit} classes=" my-[0px] " >
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

export default addproduct