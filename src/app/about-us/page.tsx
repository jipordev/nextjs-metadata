import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "AboutUs",
  description: "This is about us page",
  keywords: ['shop', 'ecommerce', 'sell']
};
const page = () => {
  return (
    <div>
      About Page
    </div>
  )
}

export default page
