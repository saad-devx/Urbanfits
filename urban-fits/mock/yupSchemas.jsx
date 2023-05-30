import * as Yup from "yup";

export const addProductSchema = Yup.object({
    productname: Yup.string().min(2).required("Please Enter Product name"),
    category: Yup.string().min(2).required("Please Select Category"),
    slug: Yup.string().required("Please Enter Slug"),
    description: Yup.string().min(2).required("Please Enter description"),
    color: Yup.string().min(2).required("Please Select Color"),
    price: Yup.number().min(2).required("Please Enter Pirce"),
    quantity: Yup.number().min(2).required("Please Enter Quantity"),
    seotitle: Yup.string().min(2).required("Please Enter seo title"),
    seodescription: Yup.string().required("Please Enter seo description"),
    width: Yup.number().required("Please Enter width"),
    height: Yup.number().required("Please Enter height"),
    weight: Yup.number().required("Please Enter weight"),
    shippingfees: Yup.number().required("Please Enter shipping fees"),
    seometakeyword:Yup.string().required("Please Enter meta keywords"),
})

export const myProfileSchema = Yup.object({
    name: Yup.string().min(2).required("Please Enter name"),
    username: Yup.string().min(2).required("Please Enter username"),
    email: Yup.string().email().min(2).required("Please Enter email"),
    phone: Yup.number().min(2).required("Please Enter phone"),
    mobileno: Yup.number().min(2).required("Please Enter mobileno"),
    addressline1: Yup.string().min(2).required("Please Enter addressline1"),
    addressline2: Yup.string().required("Please Enter addressline2"),
    city: Yup.string().required("Please Enter city"),
    state: Yup.string().required("Please Enter state"),
    country: Yup.string().required("Please Enter country"),
})

export const changePasswordSchema = Yup.object({
    oldpassword: Yup.string().min(2).required("Please Enter name"),
    newpassword: Yup.string().min(6).required("Please Enter username"),
    confirmnewpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("newpassword"), null], "password must match" )
 
})
export const generalSettingSchema = Yup.object({
    addressline1: Yup.string().min(2).required("Please Enter addressline1"),
    addressline2: Yup.string().required("Please Enter addressline2"),
    city: Yup.string().required("Please Enter city"),
    state: Yup.string().required("Please Enter state"),
    country: Yup.string().required("Please Enter country"),
    postalcode: Yup.string().required("Please Enter postalcode"),

})
    
export const inventeryManagementSchema = Yup.object({
    holdstock: Yup.string().min(2).required("Fill this field"),
    notificationrecipients: Yup.string().required("Fill this field"),
    lowstockthreshold: Yup.string().required("Fill this field"),
    outofstockthreshold: Yup.string().required("Fill this field"),

})
