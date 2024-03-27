import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Account",
  description: "This is account page",
  keywords: ['shop', 'ecommerce', 'sell']
};

const page = () => {
  return (
    <div>
      This is account page
    </div>
  )
}

export default page
