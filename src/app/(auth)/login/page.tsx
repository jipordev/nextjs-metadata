import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Login",
  description: "This is login page",
  keywords: ['shop', 'ecommerce', 'sell']
};
const page = () => {
  return (
    <div>
      Login page
    </div>
  )
}

export default page
