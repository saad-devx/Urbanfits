import React from 'react'
import Signing from '../components/signin&up'
import * as Yup from 'yup'

export default function Signup() {
  // schema and vallidation for reset password
  const resetpassSchema = Yup.object({
    "password": Yup.string().min(8).max(30).required("Please enter your password"),
    "confirm_password": Yup.string().min(8, "Password must be atleast 8 characters").max(30, "Password cannot exceed 30 characters").required("Please enter your password").oneOf([Yup.ref("password"), null], "Password must match")
  })
  const initialResetPasswordValues = {"password": '', "confirm_password": ''}
  return (
    <Signing page='login' type='resetpass' validationSchema={resetpassSchema} initialValues={initialResetPasswordValues} />
  )
}
