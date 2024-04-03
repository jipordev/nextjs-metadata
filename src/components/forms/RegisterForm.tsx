'use client'
import React from 'react'
import * as Yup from 'yup' 
import { Formik, Form , Field, ErrorMessage} from 'formik'
import { BASE_API } from '../constants/BASE_API'

// create validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password must match").required("Confirm password is required"),
  firstName: Yup.string().min(2).required("First name is required"),
  lastName: Yup.string().min(2).required("Last name is required")
})

// handle Registration

async function handleRegistration(values: any) {
  
  const {email, password, confirmPassword, firstName, lastName} = values
  try {
    const postData = await fetch(`${BASE_API}user/register/`, {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password1: password,
        password2: confirmPassword,
        first_name: firstName,
        last_name: lastName
      }) 

    })
  }
}


export default function RegisterForm() {
  return (
    <div>RegisterForm</div>
  )
}
