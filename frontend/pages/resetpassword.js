import React from 'react'
import Signing from '../components/signin&up'
import * as Yup from 'yup'

export default function Signup() {
  // schema and vallidation for reset password
  const resetpassSchema = Yup.object({
    "email": Yup.string().email().required("Please enter your email address"),
    "password": Yup.string().min(8).max(30).required("Please enter your password"),
    "confirm_password": Yup.string().min(8).max(30).oneOf([Yup.ref("password"), null], "Passowrd must match").required("Please enter your password")
  })
  const initialResetPasswordValues = { "email": '', "password": '', "confirm_password": '' }
  return (
    <Signing page='login' type='resetpass' resetpassSchema={resetpassSchema} initialResetPasswordValues={initialResetPasswordValues} />
  )
}
